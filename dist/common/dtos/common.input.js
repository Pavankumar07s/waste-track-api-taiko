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
exports.PaginationInput = exports.AggregateCountOutput = exports.FloatFilter = exports.IntFilter = exports.BoolFilter = exports.StringListFilter = exports.StringFilter = exports.DateTimeFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
let DateTimeFilter = class DateTimeFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => String }, in: { nullable: true, type: () => [String] }, notIn: { nullable: true, type: () => [String] }, lt: { nullable: true, type: () => String }, lte: { nullable: true, type: () => String }, gt: { nullable: true, type: () => String }, gte: { nullable: true, type: () => String } };
    }
};
exports.DateTimeFilter = DateTimeFilter;
exports.DateTimeFilter = DateTimeFilter = __decorate([
    (0, graphql_1.InputType)()
], DateTimeFilter);
(0, graphql_1.registerEnumType)(client_1.Prisma.QueryMode, {
    name: 'QueryMode',
});
let StringFilter = class StringFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => String }, in: { nullable: true, type: () => [String] }, notIn: { nullable: true, type: () => [String] }, lt: { nullable: true, type: () => String }, lte: { nullable: true, type: () => String }, gt: { nullable: true, type: () => String }, gte: { nullable: true, type: () => String }, contains: { nullable: true, type: () => String }, startsWith: { nullable: true, type: () => String }, endsWith: { nullable: true, type: () => String }, not: { nullable: true, type: () => String } };
    }
};
exports.StringFilter = StringFilter;
__decorate([
    (0, graphql_1.Field)(() => client_1.Prisma.QueryMode, { nullable: true }),
    __metadata("design:type", String)
], StringFilter.prototype, "mode", void 0);
exports.StringFilter = StringFilter = __decorate([
    (0, graphql_1.InputType)()
], StringFilter);
let StringListFilter = class StringListFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => [String] }, has: { nullable: true, type: () => String }, hasEvery: { nullable: true, type: () => [String] }, hasSome: { nullable: true, type: () => [String] }, isEmpty: { nullable: true, type: () => Boolean } };
    }
};
exports.StringListFilter = StringListFilter;
exports.StringListFilter = StringListFilter = __decorate([
    (0, graphql_1.InputType)()
], StringListFilter);
let BoolFilter = class BoolFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => Boolean }, not: { nullable: true, type: () => Boolean } };
    }
};
exports.BoolFilter = BoolFilter;
exports.BoolFilter = BoolFilter = __decorate([
    (0, graphql_1.InputType)()
], BoolFilter);
let IntFilter = class IntFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => Number }, lt: { nullable: true, type: () => Number }, lte: { nullable: true, type: () => Number }, gt: { nullable: true, type: () => Number }, gte: { nullable: true, type: () => Number } };
    }
};
exports.IntFilter = IntFilter;
exports.IntFilter = IntFilter = __decorate([
    (0, graphql_1.InputType)()
], IntFilter);
let FloatFilter = class FloatFilter {
    static _GRAPHQL_METADATA_FACTORY() {
        return { equals: { nullable: true, type: () => Number }, lt: { nullable: true, type: () => Number }, lte: { nullable: true, type: () => Number }, gt: { nullable: true, type: () => Number }, gte: { nullable: true, type: () => Number }, not: { nullable: true, type: () => Number } };
    }
};
exports.FloatFilter = FloatFilter;
exports.FloatFilter = FloatFilter = __decorate([
    (0, graphql_1.InputType)()
], FloatFilter);
(0, graphql_1.registerEnumType)(client_1.Prisma.SortOrder, {
    name: 'SortOrder',
});
let AggregateCountOutput = class AggregateCountOutput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { count: { type: () => Number } };
    }
};
exports.AggregateCountOutput = AggregateCountOutput;
exports.AggregateCountOutput = AggregateCountOutput = __decorate([
    (0, graphql_1.ObjectType)()
], AggregateCountOutput);
let PaginationInput = class PaginationInput {
    static _GRAPHQL_METADATA_FACTORY() {
        return { take: { nullable: true, type: () => Number }, skip: { nullable: true, type: () => Number } };
    }
};
exports.PaginationInput = PaginationInput;
exports.PaginationInput = PaginationInput = __decorate([
    (0, graphql_1.ArgsType)()
], PaginationInput);
//# sourceMappingURL=common.input.js.map