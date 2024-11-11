"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicItem = void 0;
const graphql_1 = require("@nestjs/graphql");
let ToxicItem = class ToxicItem {
    static _GRAPHQL_METADATA_FACTORY() {
        return { timestamp: { type: () => Date }, id: { type: () => Number }, name: { type: () => String }, weight: { type: () => Number }, productId: { type: () => String } };
    }
};
exports.ToxicItem = ToxicItem;
exports.ToxicItem = ToxicItem = __decorate([
    (0, graphql_1.ObjectType)()
], ToxicItem);
//# sourceMappingURL=toxic-item.entity.js.map