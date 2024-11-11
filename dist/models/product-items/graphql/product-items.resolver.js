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
exports.ProductItemsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const product_items_service_1 = require("./product-items.service");
const product_item_entity_1 = require("./entity/product-item.entity");
const find_args_1 = require("./dtos/find.args");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const product_entity_1 = require("../../products/graphql/entity/product.entity");
const transaction_entity_1 = require("../../transactions/graphql/entity/transaction.entity");
const where_args_1 = require("./dtos/where.args");
let ProductItemsResolver = class ProductItemsResolver {
    constructor(productItemsService, prisma) {
        this.productItemsService = productItemsService;
        this.prisma = prisma;
    }
    findAll(args) {
        return this.productItemsService.findAll(args);
    }
    findOne(args) {
        return this.productItemsService.findOne(args);
    }
    product(productItem) {
        return this.prisma.product.findUnique({
            where: { id: productItem.productId },
        });
    }
    transactions(productItem) {
        return this.prisma.transaction.findMany({
            where: { productItemId: productItem.id },
        });
    }
    async productItemsCount(where) {
        return this.prisma.productItem.count({ where });
    }
};
exports.ProductItemsResolver = ProductItemsResolver;
__decorate([
    (0, graphql_1.Query)(() => [product_item_entity_1.ProductItem], { name: 'productItems' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyProductItemArgs]),
    __metadata("design:returntype", void 0)
], ProductItemsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => product_item_entity_1.ProductItem, { name: 'productItem' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueProductItemArgs]),
    __metadata("design:returntype", void 0)
], ProductItemsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => product_entity_1.Product),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_item_entity_1.ProductItem]),
    __metadata("design:returntype", void 0)
], ProductItemsResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.ResolveField)(() => [transaction_entity_1.Transaction]),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_item_entity_1.ProductItem]),
    __metadata("design:returntype", void 0)
], ProductItemsResolver.prototype, "transactions", null);
__decorate([
    (0, graphql_1.Query)(() => Number, { name: 'productItemsCount' }),
    __param(0, (0, graphql_1.Args)('where', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [where_args_1.ProductItemWhereInput]),
    __metadata("design:returntype", Promise)
], ProductItemsResolver.prototype, "productItemsCount", null);
exports.ProductItemsResolver = ProductItemsResolver = __decorate([
    (0, graphql_1.Resolver)(() => product_item_entity_1.ProductItem),
    __metadata("design:paramtypes", [product_items_service_1.ProductItemsService,
        prisma_service_1.PrismaService])
], ProductItemsResolver);
//# sourceMappingURL=product-items.resolver.js.map