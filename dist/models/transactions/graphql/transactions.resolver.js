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
exports.TransactionsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const transactions_service_1 = require("./transactions.service");
const transaction_entity_1 = require("./entity/transaction.entity");
const find_args_1 = require("./dtos/find.args");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const product_item_entity_1 = require("../../product-items/graphql/entity/product-item.entity");
let TransactionsResolver = class TransactionsResolver {
    constructor(transactionsService, prisma) {
        this.transactionsService = transactionsService;
        this.prisma = prisma;
    }
    findAll(args) {
        return this.transactionsService.findAll(args);
    }
    findOne(args) {
        return this.transactionsService.findOne(args);
    }
    productItem(transaction) {
        return this.prisma.productItem.findUnique({
            where: { id: transaction.productItemId },
        });
    }
};
exports.TransactionsResolver = TransactionsResolver;
__decorate([
    (0, graphql_1.Query)(() => [transaction_entity_1.Transaction], { name: 'transactions' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindManyTransactionArgs]),
    __metadata("design:returntype", void 0)
], TransactionsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => transaction_entity_1.Transaction, { name: 'transaction' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_args_1.FindUniqueTransactionArgs]),
    __metadata("design:returntype", void 0)
], TransactionsResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.ResolveField)(() => product_item_entity_1.ProductItem),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_entity_1.Transaction]),
    __metadata("design:returntype", void 0)
], TransactionsResolver.prototype, "productItem", null);
exports.TransactionsResolver = TransactionsResolver = __decorate([
    (0, graphql_1.Resolver)(() => transaction_entity_1.Transaction),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService,
        prisma_service_1.PrismaService])
], TransactionsResolver);
//# sourceMappingURL=transactions.resolver.js.map