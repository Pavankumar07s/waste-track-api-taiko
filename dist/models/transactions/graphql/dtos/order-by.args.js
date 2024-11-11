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
exports.TransactionOrderByRelationAggregateInput = exports.TransactionOrderByWithRelationInput = exports.TransactionOrderByWithRelationInputStrict = void 0;
const eager_import_0 = require("../../../product-items/graphql/dtos/order-by.args");
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let TransactionOrderByWithRelationInputStrict = class TransactionOrderByWithRelationInputStrict {
    static _GRAPHQL_METADATA_FACTORY() {
        return { productItem: { type: () => require("../../../product-items/graphql/dtos/order-by.args").ProductItemOrderByWithRelationInput } };
    }
};
exports.TransactionOrderByWithRelationInputStrict = TransactionOrderByWithRelationInputStrict;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], TransactionOrderByWithRelationInputStrict.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], TransactionOrderByWithRelationInputStrict.prototype, "timestamp", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], TransactionOrderByWithRelationInputStrict.prototype, "productItemId", void 0);
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, {}),
    __metadata("design:type", String)
], TransactionOrderByWithRelationInputStrict.prototype, "status", void 0);
exports.TransactionOrderByWithRelationInputStrict = TransactionOrderByWithRelationInputStrict = __decorate([
    (0, graphql_1.InputType)()
], TransactionOrderByWithRelationInputStrict);
let TransactionOrderByWithRelationInput = class TransactionOrderByWithRelationInput extends (0, graphql_1.PartialType)(TransactionOrderByWithRelationInputStrict) {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.TransactionOrderByWithRelationInput = TransactionOrderByWithRelationInput;
exports.TransactionOrderByWithRelationInput = TransactionOrderByWithRelationInput = __decorate([
    (0, graphql_1.InputType)()
], TransactionOrderByWithRelationInput);
let TransactionOrderByRelationAggregateInput = class TransactionOrderByRelationAggregateInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return {};
    }
};
exports.TransactionOrderByRelationAggregateInput = TransactionOrderByRelationAggregateInput;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.SortOrder, { nullable: true }),
    __metadata("design:type", String)
], TransactionOrderByRelationAggregateInput.prototype, "_count", void 0);
exports.TransactionOrderByRelationAggregateInput = TransactionOrderByRelationAggregateInput = __decorate([
    (0, graphql_1.InputType)()
], TransactionOrderByRelationAggregateInput);
//# sourceMappingURL=order-by.args.js.map