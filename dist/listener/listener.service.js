"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
const typechain_types_1 = require("../common/typechain-types");
const util_1 = require("../common/util");
const prisma_service_1 = require("../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
const statusMapping = [
    client_1.ProductStatus.MANUFACTURED,
    client_1.ProductStatus.SOLD,
    client_1.ProductStatus.RETURNED,
    client_1.ProductStatus.RECYCLED,
];
let ListenerService = class ListenerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    onModuleInit() {
        this.initializeWebSocketProvider();
        this.subscribeToEvents();
    }
    onModuleDestroy() {
        this.cleanup();
    }
    initializeWebSocketProvider() {
        const infuraWssUrl = `wss://polygon-amoy.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
        this.provider = new ethers_1.ethers.WebSocketProvider(infuraWssUrl);
        this.contract = typechain_types_1.RecycleChain__factory.connect(util_1.contractAddress, this.provider);
    }
    subscribeToEvents() {
        if (!this.contract) {
            throw new Error('Contract is not initialized');
        }
        try {
            this.contract.on(this.contract.filters.ManufacturerRegistered, async (id, name, location, contact, event) => {
                const blockNumber = event.log.blockNumber;
                const timestamp = await this.getBlockTimeStamp(blockNumber);
                await this.createManufacturer({
                    contact,
                    id,
                    location,
                    name,
                    timestamp,
                });
            });
            console.log('Event: ManufacturerRegistered Listening...');
        }
        catch (error) {
            console.error('Event: ManufacturerRegistered: Listener setup failed.', error);
        }
        try {
            this.contract.on(this.contract.filters.ProductCreated, async (productId, name, manufacturer, event) => {
                const blockNumber = event.log.blockNumber;
                const timestamp = await this.getBlockTimeStamp(blockNumber);
                await this.createProduct({
                    manufacturer,
                    name,
                    productId: productId.toString(),
                    timestamp,
                });
            });
            console.log('Event: ProductCreated Listening...');
        }
        catch (error) {
            console.error('Event: ProductCreated: Listener setup failed.', error);
        }
        try {
            this.contract.on(this.contract.filters.ProductItemsAdded, async (productItemIds, productId, event) => {
                const timestamp = await this.getBlockTimeStamp(event.log.blockNumber);
                const items = await this.createProductItems({
                    productId: productId.toString(),
                    productItemIds,
                    timestamp,
                });
                console.log('items', items);
            });
            console.log('Event: ProductItemsAdded Listening...');
        }
        catch (error) {
            console.error('Event: ProductItemsAdded: Listener setup failed.', error);
        }
        try {
            this.contract.on(this.contract.filters.ProductItemsStatusChanged, async (productItemIds, statusIndex, event) => {
                const timestamp = await this.getBlockTimeStamp(event.log.blockNumber);
                await this.updateProductItemStatus({
                    productItemIds,
                    statusIndex: +statusIndex.toString(),
                    timestamp,
                });
            });
            console.log('Event: ProductItemsStatusChanged Listening...');
        }
        catch (error) {
            console.error('Event: ProductItemsStatusChanged: Listener setup failed.', error);
        }
        try {
            this.contract.on(this.contract.filters.ToxicItemCreated, async (productId, name, weight, event) => {
                const timestamp = await this.getBlockTimeStamp(event.log.blockNumber);
                await this.createToxicItem({
                    name,
                    productId: productId.toString(),
                    weight: Number(weight.toString()),
                    timestamp,
                });
            });
            console.log('Event: ToxicItemCreated Listening...');
        }
        catch (error) {
            console.error('Event: ToxicItemCreated: Listener setup failed.', error);
        }
    }
    async resyncBlockchainData() {
        if (!this.contract) {
            throw new Error('Contract is not initialized');
        }
        const fromBlock = 0;
        const toBlock = 'latest';
        const manufacturerRegisteredEvents = await this.contract.queryFilter(this.contract.filters.ManufacturerRegistered, fromBlock, toBlock);
        for (const event of manufacturerRegisteredEvents) {
            const [id, name, location, contact] = event.args;
            const timestamp = await this.getBlockTimeStamp(event.blockNumber);
            await this.createManufacturer({
                contact,
                id,
                location,
                name,
                timestamp,
            });
        }
        const productCreatedEvents = await this.contract.queryFilter(this.contract.filters.ProductCreated, fromBlock, toBlock);
        for (const event of productCreatedEvents) {
            const [productId, name, manufacturer] = event.args;
            const timestamp = await this.getBlockTimeStamp(event.blockNumber);
            await this.createProduct({
                manufacturer,
                name,
                productId: productId.toString(),
                timestamp,
            });
        }
        const productItemsAddedEvents = await this.contract.queryFilter(this.contract.filters.ProductItemsAdded, fromBlock, toBlock);
        for (const event of productItemsAddedEvents) {
            const [productItemIds, productId] = event.args;
            const timestamp = await this.getBlockTimeStamp(event.blockNumber);
            await this.createProductItems({
                productId: productId.toString(),
                productItemIds,
                timestamp,
            });
        }
        const productItemsStatusChangedEvents = await this.contract.queryFilter(this.contract.filters.ProductItemsStatusChanged, fromBlock, toBlock);
        for (const event of productItemsStatusChangedEvents) {
            const [productItemIds, statusIndex] = event.args;
            const timestamp = await this.getBlockTimeStamp(event.blockNumber);
            await this.updateProductItemStatus({
                productItemIds,
                statusIndex: +statusIndex.toString(),
                timestamp,
            });
        }
        const toxicItemCreatedEvents = await this.contract.queryFilter(this.contract.filters.ToxicItemCreated(), fromBlock, toBlock);
        for (const event of toxicItemCreatedEvents) {
            const [productId, name, weight] = event.args;
            const timestamp = await this.getBlockTimeStamp(event.blockNumber);
            await this.createToxicItem({
                name,
                productId: productId.toString(),
                weight: +weight.toString(),
                timestamp,
            });
        }
    }
    cleanup() {
        this.provider.removeAllListeners();
    }
    async getBlockTimeStamp(blockNumber) {
        const block = await this.provider.getBlock(blockNumber);
        return new Date(block.timestamp * 1000);
    }
    async createManufacturer({ id, name, location, contact, timestamp, }) {
        const manufacturer = await this.prisma.manufacturer.create({
            data: {
                id,
                timestamp,
                contact,
                location,
                name,
            },
        });
        console.log('Manufacturer created: ', manufacturer);
    }
    async createProduct({ manufacturer, name, productId, timestamp, }) {
        const product = await this.prisma.product.create({
            data: {
                id: productId,
                name,
                timestamp,
                manufacturer: {
                    connect: {
                        id: manufacturer,
                    },
                },
            },
        });
        console.log('Product created: ', product);
    }
    createProductItems({ productId, productItemIds, timestamp, }) {
        const transactions = productItemIds.map((productItemId) => {
            return this.prisma.transaction.create({
                data: {
                    status: client_1.ProductStatus.MANUFACTURED,
                    productItemId,
                    timestamp,
                },
            });
        });
        const productItemUpdates = this.prisma.productItem.createMany({
            data: productItemIds.map((id) => ({
                id,
                productId: productId.toString(),
                status: client_1.ProductStatus.MANUFACTURED,
                timestamp,
            })),
        });
        return this.prisma.$transaction([productItemUpdates, ...transactions]);
    }
    updateProductItemStatus({ statusIndex, productItemIds, timestamp, }) {
        const status = statusMapping[+statusIndex.toString()];
        const transactions = productItemIds.map((productItemId) => {
            return this.prisma.transaction.create({
                data: {
                    status,
                    productItemId,
                    timestamp,
                },
            });
        });
        const productItemUpdates = this.prisma.productItem.updateMany({
            data: { status, timestamp },
            where: { id: { in: productItemIds } },
        });
        return this.prisma.$transaction([productItemUpdates, ...transactions]);
    }
    async createToxicItem({ productId, name, weight, timestamp, }) {
        const maxRetries = 5;
        let retryCount = 0;
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        while (retryCount < maxRetries) {
            const product = await this.prisma.product.findUnique({
                where: {
                    id: productId,
                },
            });
            if (product) {
                const toxicItem = await this.prisma.toxicItem.create({
                    data: {
                        name,
                        weight,
                        productId,
                        timestamp,
                    },
                });
                console.log('Toxic item created: ', toxicItem);
                return;
            }
            else {
                console.error(`Product with ID ${productId} not found. Retrying (${retryCount + 1}/${maxRetries})...`);
                await delay(1000);
                retryCount++;
            }
        }
    }
};
exports.ListenerService = ListenerService;
exports.ListenerService = ListenerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListenerService);
//# sourceMappingURL=listener.service.js.map