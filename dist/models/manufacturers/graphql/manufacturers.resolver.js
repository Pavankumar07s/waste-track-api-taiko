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
exports.ManufacturersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const manufacturers_service_1 = require("./manufacturers.service");
const manufacturer_entity_1 = require("./entity/manufacturer.entity");
const find_args_1 = require("./dtos/find.args");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const product_entity_1 = require("../../products/graphql/entity/product.entity");
const where_args_1 = require("./dtos/where.args");
const client_1 = require("@prisma/client");
let ManufacturersResolver = class ManufacturersResolver {
    constructor(manufacturersService, prisma) {
        this.manufacturersService = manufacturersService;
        this.prisma = prisma;
    }
    findAll(args) {
        return this.manufacturersService.findAll(args);
    }
    findOne(args) {
        return this.manufacturersService.findOne(args);
    }
    products(manufacturer) {
        return this.prisma.product.findMany({
            where: { manufacturerId: manufacturer.id },
        });
    }
    async manufacturersCount(where) {
        return this.prisma.manufacturer.count({ where });
    }
    async totalCount(manufacturer) {
        return this.prisma.productItem.count({
            where: {
                product: { manufacturerId: manufacturer.id },
            },
        });
    }
    async getCountPerStatus(parent, status) {
        return this.prisma.productItem.count({
            where: {
                status,
                product: { manufacturerId: parent.id },
            },
        });
    }
    async productsCount(manufacturer) {
        return this.prisma.product.count({
            where: {
                manufacturerId: manufacturer.id,
            },
        });
    }
};
exports.ManufacturersResolver = ManufacturersResolver;
__decorate([
    (0, graphql_1.Query)(() => [manufacturer_entity_1.Manufacturer], { name: 'manufacturers' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyManufacturerArgs]),
    __metadata("design:returntype", void 0)
], ManufacturersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => manufacturer_entity_1.Manufacturer, { name: 'manufacturer' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueManufacturerArgs]),
    __metadata("design:returntype", void 0)
], ManufacturersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [product_entity_1.Product]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_entity_1.Manufacturer]),
    __metadata("design:returntype", void 0)
], ManufacturersResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Query)(() => Number, { name: 'manufacturersCount' }),
    __param(0, (0, graphql_1.Args)('where', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [where_args_1.ManufacturerWhereInput]),
    __metadata("design:returntype", Promise)
], ManufacturersResolver.prototype, "manufacturersCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        name: 'totalCount',
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_entity_1.Manufacturer]),
    __metadata("design:returntype", Promise)
], ManufacturersResolver.prototype, "totalCount", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        name: 'getCountPerStatus',
    }),
    __param(0, (0, graphql_1.Parent)()),
    __param(1, (0, graphql_1.Args)('status', { type: () => client_1.ProductStatus })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_entity_1.Manufacturer, String]),
    __metadata("design:returntype", Promise)
], ManufacturersResolver.prototype, "getCountPerStatus", null);
__decorate([
    (0, graphql_1.ResolveField)(() => Number, {
        name: 'productsCount',
    }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manufacturer_entity_1.Manufacturer]),
    __metadata("design:returntype", Promise)
], ManufacturersResolver.prototype, "productsCount", null);
exports.ManufacturersResolver = ManufacturersResolver = __decorate([
    (0, graphql_1.Resolver)(() => manufacturer_entity_1.Manufacturer),
    __metadata("design:paramtypes", [manufacturers_service_1.ManufacturersService,
        prisma_service_1.PrismaService])
], ManufacturersResolver);
//# sourceMappingURL=manufacturers.resolver.js.map