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
exports.ProductOrderByRelationAggregateInput = exports.ProductOrderByWithRelationInput = exports.ProductOrderByWithRelationInputStrict = void 0;
const eager_import_0 = require("../../../manufacturers/graphql/dtos/order-by.args");
const eager_import_1 = require("../../../product-items/graphql/dtos/order-by.args");
const eager_import_2 = require("../../../toxic-items/graphql/dtos/order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let ProductOrderByWithRelationInputStrict = class ProductOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { manufacturer: { type: () => require("../../../manufacturers/graphql/dtos/order-by.args").ManufacturerOrderByWithRelationInput }, productItems: { type: () => require("../../../product-items/graphql/dtos/order-by.args").ProductItemOrderByRelationAggregateInput }, toxicItems: { type: () => require("../../../toxic-items/graphql/dtos/order-by.args").ToxicItemOrderByRelationAggregateInput } };
    }
};
exports.ProductOrderByWithRelationInputStrict = ProductOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductOrderByWithRelationInputStrict.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductOrderByWithRelationInputStrict.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ProductOrderByWithRelationInputStrict.prototype, "manufacturerId", void 0);
exports.ProductOrderByWithRelationInputStrict = ProductOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ProductOrderByWithRelationInputStrict);
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput extends (0, graphql_1.PartialType)(ProductOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ProductOrderByWithRelationInput);
let ProductOrderByRelationAggregateInput = class ProductOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ProductOrderByRelationAggregateInput = ProductOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ProductOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ProductOrderByRelationAggregateInput = ProductOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ProductOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map