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
exports.ProductItemRelationFilter = exports.ProductItemListRelationFilter = exports.ProductItemWhereInput = exports.ProductItemWhereInputStrict = exports.ProductItemWhereUniqueInput = void 0;
const eager_import_0 = require("../../../../common/dtos/common.input");
const eager_import_1 = require("../../../products/graphql/dtos/where.args");
const eager_import_2 = require("../../../transactions/graphql/dtos/where.args");
const eager_import_3 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let ProductItemWhereUniqueInput = class ProductItemWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String } };
    }
};
exports.ProductItemWhereUniqueInput = ProductItemWhereUniqueInput;
exports.ProductItemWhereUniqueInput = ProductItemWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ProductItemWhereUniqueInput);
let ProductItemWhereInputStrict = class ProductItemWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => require("../../../../common/dtos/common.input").StringFilter }, timestamp: { type: () => require("../../../../common/dtos/common.input").DateTimeFilter }, productId: { type: () => require("../../../../common/dtos/common.input").StringFilter }, product: { type: () => require("../../../products/graphql/dtos/where.args").ProductRelationFilter }, transactions: { type: () => require("../../../transactions/graphql/dtos/where.args").TransactionListRelationFilter }, AND: { type: () => [require("./where.args").ProductItemWhereInput] }, OR: { type: () => [require("./where.args").ProductItemWhereInput] }, NOT: { type: () => [require("./where.args").ProductItemWhereInput] } };
    }
};
exports.ProductItemWhereInputStrict = ProductItemWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.$Enums.ProductStatus, {}),
    __metadata("design:type", String)
], ProductItemWhereInputStrict.prototype, "status", void 0);
exports.ProductItemWhereInputStrict = ProductItemWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProductItemWhereInputStrict);
let ProductItemWhereInput = class ProductItemWhereInput extends (0, graphql_1.PartialType)(ProductItemWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductItemWhereInput = ProductItemWhereInput;
exports.ProductItemWhereInput = ProductItemWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ProductItemWhereInput);
let ProductItemListRelationFilter = class ProductItemListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").ProductItemWhereInput }, some: { nullable: true, type: () => require("./where.args").ProductItemWhereInput }, none: { nullable: true, type: () => require("./where.args").ProductItemWhereInput } };
    }
};
exports.ProductItemListRelationFilter = ProductItemListRelationFilter;
exports.ProductItemListRelationFilter = ProductItemListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProductItemListRelationFilter);
let ProductItemRelationFilter = class ProductItemRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").ProductItemWhereInput }, isNot: { nullable: true, type: () => require("./where.args").ProductItemWhereInput } };
    }
};
exports.ProductItemRelationFilter = ProductItemRelationFilter;
exports.ProductItemRelationFilter = ProductItemRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProductItemRelationFilter);
//# sourceMappingURL=where.args.js.map