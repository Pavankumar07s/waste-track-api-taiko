"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicItemRelationFilter = exports.ToxicItemListRelationFilter = exports.ToxicItemWhereInput = exports.ToxicItemWhereInputStrict = exports.ToxicItemWhereUniqueInput = void 0;
const eager_import_0 = require("../../../../common/dtos/common.input");
const eager_import_1 = require("../../../products/graphql/dtos/where.args");
const eager_import_2 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
let ToxicItemWhereUniqueInput = class ToxicItemWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number } };
    }
};
exports.ToxicItemWhereUniqueInput = ToxicItemWhereUniqueInput;
exports.ToxicItemWhereUniqueInput = ToxicItemWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemWhereUniqueInput);
let ToxicItemWhereInputStrict = class ToxicItemWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { timestamp: { type: () => require("../../../../common/dtos/common.input").DateTimeFilter }, id: { type: () => require("../../../../common/dtos/common.input").IntFilter }, name: { type: () => require("../../../../common/dtos/common.input").StringFilter }, weight: { type: () => require("../../../../common/dtos/common.input").IntFilter }, productId: { type: () => require("../../../../common/dtos/common.input").StringFilter }, Product: { type: () => require("../../../products/graphql/dtos/where.args").ProductRelationFilter }, AND: { type: () => [require("./where.args").ToxicItemWhereInput] }, OR: { type: () => [require("./where.args").ToxicItemWhereInput] }, NOT: { type: () => [require("./where.args").ToxicItemWhereInput] } };
    }
};
exports.ToxicItemWhereInputStrict = ToxicItemWhereInputStrict;
exports.ToxicItemWhereInputStrict = ToxicItemWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemWhereInputStrict);
let ToxicItemWhereInput = class ToxicItemWhereInput extends (0, graphql_1.PartialType)(ToxicItemWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ToxicItemWhereInput = ToxicItemWhereInput;
exports.ToxicItemWhereInput = ToxicItemWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemWhereInput);
let ToxicItemListRelationFilter = class ToxicItemListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").ToxicItemWhereInput }, some: { nullable: true, type: () => require("./where.args").ToxicItemWhereInput }, none: { nullable: true, type: () => require("./where.args").ToxicItemWhereInput } };
    }
};
exports.ToxicItemListRelationFilter = ToxicItemListRelationFilter;
exports.ToxicItemListRelationFilter = ToxicItemListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemListRelationFilter);
let ToxicItemRelationFilter = class ToxicItemRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").ToxicItemWhereInput }, isNot: { nullable: true, type: () => require("./where.args").ToxicItemWhereInput } };
    }
};
exports.ToxicItemRelationFilter = ToxicItemRelationFilter;
exports.ToxicItemRelationFilter = ToxicItemRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemRelationFilter);
//# sourceMappingURL=where.args.js.map