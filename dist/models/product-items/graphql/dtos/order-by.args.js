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
exports.ProductItemOrderByRelationAggregateInput = exports.ProductItemOrderByWithRelationInput = exports.ProductItemOrderByWithRelationInputStrict = void 0;
const eager_import_0 = require("../../../products/graphql/dtos/order-by.args");
const eager_import_1 = require("../../../transactions/graphql/dtos/order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let ProductItemOrderByWithRelationInputStrict = class ProductItemOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { product: { type: () => require("../../../products/graphql/dtos/order-by.args").ProductOrderByWithRelationInput }, transactions: { type: () => require("../../../transactions/graphql/dtos/order-by.args").TransactionOrderByRelationAggregateInput } };
    }
};
exports.ProductItemOrderByWithRelationInputStrict = ProductItemOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductItemOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductItemOrderByWithRelationInputStrict.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductItemOrderByWithRelationInputStrict.prototype, "productId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductItemOrderByWithRelationInputStrict.prototype, "status", void 0);
exports.ProductItemOrderByWithRelationInputStrict = ProductItemOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProductItemOrderByWithRelationInputStrict);
let ProductItemOrderByWithRelationInput = class ProductItemOrderByWithRelationInput extends (0, graphql_1.PartialType)(ProductItemOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductItemOrderByWithRelationInput = ProductItemOrderByWithRelationInput;
exports.ProductItemOrderByWithRelationInput = ProductItemOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ProductItemOrderByWithRelationInput);
let ProductItemOrderByRelationAggregateInput = class ProductItemOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductItemOrderByRelationAggregateInput = ProductItemOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProductItemOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ProductItemOrderByRelationAggregateInput = ProductItemOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ProductItemOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map