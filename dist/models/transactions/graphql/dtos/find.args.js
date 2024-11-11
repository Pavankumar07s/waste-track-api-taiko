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
exports.FindUniqueTransactionArgs = exports.FindManyTransactionArgs = void 0;
const eager_import_0 = require("./where.args");
const eager_import_1 = require("./order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
(0, graphql_1.registerEnumType)(client_1.Prisma.TransactionScalarFieldEnum, {
    name: 'TransactionScalarFieldEnum',
});
let FindManyTransactionArgsStrict = class FindManyTransactionArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").TransactionWhereInput }, orderBy: { type: () => [require("./order-by.args").TransactionOrderByWithRelationInput] }, cursor: { type: () => require("./where.args").TransactionWhereUniqueInput }, take: { type: () => Number }, skip: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.TransactionScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyTransactionArgsStrict.prototype, "distinct", void 0);
FindManyTransactionArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyTransactionArgsStrict);
let FindManyTransactionArgs = class FindManyTransactionArgs extends (0, graphql_1.PartialType)(FindManyTransactionArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyTransactionArgs = FindManyTransactionArgs;
exports.FindManyTransactionArgs = FindManyTransactionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyTransactionArgs);
let FindUniqueTransactionArgs = class FindUniqueTransactionArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").TransactionWhereUniqueInput } };
    }
};
exports.FindUniqueTransactionArgs = FindUniqueTransactionArgs;
exports.FindUniqueTransactionArgs = FindUniqueTransactionArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueTransactionArgs);
//# sourceMappingURL=find.args.js.map