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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entity/product.entity");
const find_args_1 = require("./dtos/find.args");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const manufacturer_entity_1 = require("../../manufacturers/graphql/entity/manufacturer.entity");
const product_item_entity_1 = require("../../product-items/graphql/entity/product-item.entity");
const toxic_item_entity_1 = require("../../toxic-items/graphql/entity/toxic-item.entity");
const where_args_1 = require("./dtos/where.args");
const client_1 = require("@prisma/client");
let ProductsResolver = class ProductsResolver {
    constructor(productsService, prisma) {
        this.productsService = productsService;
        this.prisma = prisma;
    }
    findAll(args) {
        return this.productsService.findAll(args);
    }
    findOne(args) {
        return this.productsService.findOne(args);
    }
    manufacturer(product) {
        return this.prisma.manufacturer.findUnique({
            where: { id: product.manufacturerId },
        });
    }
    productItems(product) {
        return this.prisma.productItem.findMany({
            where: { productId: product.id },
        });
    }
    toxicItems(product) {
        return this.prisma.toxicItem.findMany({
            where: { productId: product.id },
        });
    }
    async totalCount(parent) {
        return this.prisma.productItem.count({
            where: { productId: parent.id },
        });
    }
    async productsCount(where) {
        return this.prisma.product.count({ where });
    }
    async getCountPerStatus(parent, status) {
        return this.prisma.productItem.count({
            where: {
                status,
                productId: parent.id,
            },
        });
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: 'products' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyProductArgs]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: 'product' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueProductArgs]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => manufacturer_entity_1.Manufacturer),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "manufacturer", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [product_item_entity_1.ProductItem]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "productItems", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [toxic_item_entity_1.ToxicItem]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "toxicItems", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        name: 'totalCount',
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "totalCount", null);
__decorate([
    (0, graphql_1.Query)(() => Number, { name: 'productsCount' }),
    __param(0, (0, graphql_1.Args)('where', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [where_args_1.ProductWhereInput]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "productsCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        name: 'getCountPerStatus',
    }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('status', { type: () => client_1.ProductStatus })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.Product, String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getCountPerStatus", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    __metadata("design:paramtypes", [products_service_1.ProductsService,
        prisma_service_1.PrismaService])
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map