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
exports.ToxicItemOrderByRelationAggregateInput = exports.ToxicItemOrderByWithRelationInput = exports.ToxicItemOrderByWithRelationInputStrict = void 0;
const eager_import_0 = require("../../../products/graphql/dtos/order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let ToxicItemOrderByWithRelationInputStrict = class ToxicItemOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { Product: { type: () => require("../../../products/graphql/dtos/order-by.args").ProductOrderByWithRelationInput } };
    }
};
exports.ToxicItemOrderByWithRelationInputStrict = ToxicItemOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ToxicItemOrderByWithRelationInputStrict.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ToxicItemOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ToxicItemOrderByWithRelationInputStrict.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ToxicItemOrderByWithRelationInputStrict.prototype, "weight", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], ToxicItemOrderByWithRelationInputStrict.prototype, "productId", void 0);
exports.ToxicItemOrderByWithRelationInputStrict = ToxicItemOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemOrderByWithRelationInputStrict);
let ToxicItemOrderByWithRelationInput = class ToxicItemOrderByWithRelationInput extends (0, graphql_1.PartialType)(ToxicItemOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ToxicItemOrderByWithRelationInput = ToxicItemOrderByWithRelationInput;
exports.ToxicItemOrderByWithRelationInput = ToxicItemOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemOrderByWithRelationInput);
let ToxicItemOrderByRelationAggregateInput = class ToxicItemOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.ToxicItemOrderByRelationAggregateInput = ToxicItemOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], ToxicItemOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.ToxicItemOrderByRelationAggregateInput = ToxicItemOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], ToxicItemOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map