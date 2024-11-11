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
exports.FindUniqueProductArgs = exports.FindManyProductArgs = void 0;
const eager_import_0 = require("./where.args");
const eager_import_1 = require("./order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
(0, graphql_1.registerEnumType)(client_1.Prisma.ProductScalarFieldEnum, {
    name: 'ProductScalarFieldEnum',
});
let FindManyProductArgsStrict = class FindManyProductArgsStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").ProductWhereInput }, orderBy: { type: () => [require("./order-by.args").ProductOrderByWithRelationInput] }, cursor: { type: () => require("./where.args").ProductWhereUniqueInput }, take: { type: () => Number }, skip: { type: () => Number } };
    }
};
__decorate([
    (0, graphql_1.Field)(() => [client_1.Prisma.ProductScalarFieldEnum], {}),
    __metadata("design:type", Array)
], FindManyProductArgsStrict.prototype, "distinct", void 0);
FindManyProductArgsStrict = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyProductArgsStrict);
let FindManyProductArgs = class FindManyProductArgs extends (0, graphql_1.PartialType)(FindManyProductArgsStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.FindManyProductArgs = FindManyProductArgs;
exports.FindManyProductArgs = FindManyProductArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindManyProductArgs);
let FindUniqueProductArgs = class FindUniqueProductArgs {
    static _GRAPHQL_METADATA_FACTORY() {
        return { where: { type: () => require("./where.args").ProductWhereUniqueInput } };
    }
};
exports.FindUniqueProductArgs = FindUniqueProductArgs;
exports.FindUniqueProductArgs = FindUniqueProductArgs = __decorate([
    (0, graphql_1.ArgsType)()
], FindUniqueProductArgs);
//# sourceMappingURL=find.args.js.map