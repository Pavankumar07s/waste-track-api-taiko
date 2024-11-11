"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToxicItemsModule = void 0;
const common_1 = require("@nestjs/common");
const toxic_items_service_1 = require("./graphql/toxic-items.service");
const toxic_items_resolver_1 = require("./graphql/toxic-items.resolver");
const toxic_items_controller_1 = require("./rest/toxic-items.controller");
let ToxicItemsModule = class ToxicItemsModule {
};
exports.ToxicItemsModule = ToxicItemsModule;
exports.ToxicItemsModule = ToxicItemsModule = __decorate([
    (0, common_1.Module)({
        providers: [toxic_items_resolver_1.ToxicItemsResolver, toxic_items_service_1.ToxicItemsService],
        exports: [toxic_items_service_1.ToxicItemsService],
        controllers: [toxic_items_controller_1.ToxicItemsController],
    })
], ToxicItemsModule);
//# sourceMappingURL=toxic-items.module.js.map