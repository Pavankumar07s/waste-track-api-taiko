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
exports.TransactionRelationFilter = exports.TransactionListRelationFilter = exports.TransactionWhereInput = exports.TransactionWhereInputStrict = exports.TransactionWhereUniqueInput = void 0;
const eager_import_0 = require("../../../../common/dtos/common.input");
const eager_import_1 = require("../../../product-items/graphql/dtos/where.args");
const eager_import_2 = require("./where.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let TransactionWhereUniqueInput = class TransactionWhereUniqueInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => Number } };
    }
};
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput;
exports.TransactionWhereUniqueInput = TransactionWhereUniqueInput = __decorate([
    (0, graphql_1.InputType)()
], TransactionWhereUniqueInput);
let TransactionWhereInputStrict = class TransactionWhereInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { id: { type: () => require("../../../../common/dtos/common.input").IntFilter }, timestamp: { type: () => require("../../../../common/dtos/common.input").DateTimeFilter }, productItemId: { type: () => require("../../../../common/dtos/common.input").StringFilter }, productItem: { type: () => require("../../../product-items/graphql/dtos/where.args").ProductItemRelationFilter }, AND: { type: () => [require("./where.args").TransactionWhereInput] }, OR: { type: () => [require("./where.args").TransactionWhereInput] }, NOT: { type: () => [require("./where.args").TransactionWhereInput] } };
    }
};
exports.TransactionWhereInputStrict = TransactionWhereInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.$Enums.ProductStatus, {}),
    __metadata("design:type", String)
], TransactionWhereInputStrict.prototype, "status", void 0);
exports.TransactionWhereInputStrict = TransactionWhereInputStrict = __decorate([
    (0, graphql_1.InputType)()
], TransactionWhereInputStrict);
let TransactionWhereInput = class TransactionWhereInput extends (0, graphql_1.PartialType)(TransactionWhereInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.TransactionWhereInput = TransactionWhereInput;
exports.TransactionWhereInput = TransactionWhereInput = __decorate([
    (0, graphql_1.InputType)()
], TransactionWhereInput);
let TransactionListRelationFilter = class TransactionListRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { every: { nullable: true, type: () => require("./where.args").TransactionWhereInput }, some: { nullable: true, type: () => require("./where.args").TransactionWhereInput }, none: { nullable: true, type: () => require("./where.args").TransactionWhereInput } };
    }
};
exports.TransactionListRelationFilter = TransactionListRelationFilter;
exports.TransactionListRelationFilter = TransactionListRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], TransactionListRelationFilter);
let TransactionRelationFilter = class TransactionRelationFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { is: { nullable: true, type: () => require("./where.args").TransactionWhereInput }, isNot: { nullable: true, type: () => require("./where.args").TransactionWhereInput } };
    }
};
exports.TransactionRelationFilter = TransactionRelationFilter;
exports.TransactionRelationFilter = TransactionRelationFilter = __decorate([
    (0, graphql_1.InputType)()
], TransactionRelationFilter);
//# sourceMappingURL=where.args.js.map