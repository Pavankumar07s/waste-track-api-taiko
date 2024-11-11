"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationFilter = exports.ProductListRelationFilter = exports.ProductWhereInput = exports.ProductWhereInputStrict = exports.ProductWhereUniqueInput = void 0;
const eager_import_0 = require("../../../../common/dtos/common.input");
const eager_import_1 = require("../../../manufacturers/graphql/dtos/where.args");
const eager_import_2 = require("../../../product-items/graphql/dtos/where.args");
const eager_import_3 = require("../../../toxic-items/graphql/dtos/where.args");
const eager_import_4 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
let ProductWhereUniqueInput = class ProductWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String } };
    }
};
exports.ProductWhereUniqueInput = ProductWhereUniqueInput;
exports.ProductWhereUniqueInput = ProductWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ProductWhereUniqueInput);
let ProductWhereInputStrict = class ProductWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => require("../../../../common/dtos/common.input").StringFilter }, timestamp: { type: () => require("../../../../common/dtos/common.input").DateTimeFilter }, name: { type: () => require("../../../../common/dtos/common.input").StringFilter }, manufacturerId: { type: () => require("../../../../common/dtos/common.input").StringFilter }, manufacturer: { type: () => require("../../../manufacturers/graphql/dtos/where.args").ManufacturerRelationFilter }, productItems: { type: () => require("../../../product-items/graphql/dtos/where.args").ProductItemListRelationFilter }, toxicItems: { type: () => require("../../../toxic-items/graphql/dtos/where.args").ToxicItemListRelationFilter }, AND: { type: () => [require("./where.args").ProductWhereInput] }, OR: { type: () => [require("./where.args").ProductWhereInput] }, NOT: { type: () => [require("./where.args").ProductWhereInput] } };
    }
};
exports.ProductWhereInputStrict = ProductWhereInputStrict;
exports.ProductWhereInputStrict = ProductWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProductWhereInputStrict);
let ProductWhereInput = class ProductWhereInput extends (0, graphql_1.PartialType)(ProductWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductWhereInput = ProductWhereInput;
exports.ProductWhereInput = ProductWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ProductWhereInput);
let ProductListRelationFilter = class ProductListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").ProductWhereInput }, some: { nullable: true, type: () => require("./where.args").ProductWhereInput }, none: { nullable: true, type: () => require("./where.args").ProductWhereInput } };
    }
};
exports.ProductListRelationFilter = ProductListRelationFilter;
exports.ProductListRelationFilter = ProductListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProductListRelationFilter);
let ProductRelationFilter = class ProductRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").ProductWhereInput }, isNot: { nullable: true, type: () => require("./where.args").ProductWhereInput } };
    }
};
exports.ProductRelationFilter = ProductRelationFilter;
exports.ProductRelationFilter = ProductRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ProductRelationFilter);
//# sourceMappingURL=where.args.js.map