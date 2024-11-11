"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManufacturerRelationFilter = exports.ManufacturerListRelationFilter = exports.ManufacturerWhereInput = exports.ManufacturerWhereInputStrict = exports.ManufacturerWhereUniqueInput = void 0;
const eager_import_0 = require("../../../../common/dtos/common.input");
const eager_import_1 = require("../../../products/graphql/dtos/where.args");
const eager_import_2 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
let ManufacturerWhereUniqueInput = class ManufacturerWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => String } };
    }
};
exports.ManufacturerWhereUniqueInput = ManufacturerWhereUniqueInput;
exports.ManufacturerWhereUniqueInput = ManufacturerWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerWhereUniqueInput);
let ManufacturerWhereInputStrict = class ManufacturerWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => require("../../../../common/dtos/common.input").StringFilter }, timestamp: { type: () => require("../../../../common/dtos/common.input").DateTimeFilter }, name: { type: () => require("../../../../common/dtos/common.input").StringFilter }, location: { type: () => require("../../../../common/dtos/common.input").StringFilter }, contact: { type: () => require("../../../../common/dtos/common.input").StringFilter }, products: { type: () => require("../../../products/graphql/dtos/where.args").ProductListRelationFilter }, AND: { type: () => [require("./where.args").ManufacturerWhereInput] }, OR: { type: () => [require("./where.args").ManufacturerWhereInput] }, NOT: { type: () => [require("./where.args").ManufacturerWhereInput] } };
    }
};
exports.ManufacturerWhereInputStrict = ManufacturerWhereInputStrict;
exports.ManufacturerWhereInputStrict = ManufacturerWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerWhereInputStrict);
let ManufacturerWhereInput = class ManufacturerWhereInput extends (0, graphql_1.PartialType)(ManufacturerWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ManufacturerWhereInput = ManufacturerWhereInput;
exports.ManufacturerWhereInput = ManufacturerWhereInput = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerWhereInput);
let ManufacturerListRelationFilter = class ManufacturerListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").ManufacturerWhereInput }, some: { nullable: true, type: () => require("./where.args").ManufacturerWhereInput }, none: { nullable: true, type: () => require("./where.args").ManufacturerWhereInput } };
    }
};
exports.ManufacturerListRelationFilter = ManufacturerListRelationFilter;
exports.ManufacturerListRelationFilter = ManufacturerListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerListRelationFilter);
let ManufacturerRelationFilter = class ManufacturerRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").ManufacturerWhereInput }, isNot: { nullable: true, type: () => require("./where.args").ManufacturerWhereInput } };
    }
};
exports.ManufacturerRelationFilter = ManufacturerRelationFilter;
exports.ManufacturerRelationFilter = ManufacturerRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], ManufacturerRelationFilter);
//# sourceMappingURL=where.args.js.map