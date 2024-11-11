"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemsModule = void 0;
const common_1 = require("@nestjs/common");
const product_items_service_1 = require("./graphql/product-items.service");
const product_items_resolver_1 = require("./graphql/product-items.resolver");
const product_items_controller_1 = require("./rest/product-items.controller");
let ProductItemsModule = class ProductItemsModule {
};
exports.ProductItemsModule = ProductItemsModule;
exports.ProductItemsModule = ProductItemsModule = __decorate([
    (0, common_1.Module)({
        providers: [product_items_resolver_1.ProductItemsResolver, product_items_service_1.ProductItemsService],
        exports: [product_items_service_1.ProductItemsService],
        controllers: [product_items_controller_1.ProductItemsController],
    })
], ProductItemsModule);
//# sourceMappingURL=product-items.module.js.map