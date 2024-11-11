"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./common/prisma/prisma.module");
const listener_module_1 = require("./listener/listener.module");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const manufacturers_module_1 = require("./models/manufacturers/manufacturers.module");
const product_items_module_1 = require("./models/product-items/product-items.module");
const products_module_1 = require("./models/products/products.module");
const toxic_items_module_1 = require("./models/toxic-items/toxic-items.module");
const transactions_module_1 = require("./models/transactions/transactions.module");
const resync_module_1 = require("./resync/resync.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                introspection: true,
            }),
            prisma_module_1.PrismaModule,
            listener_module_1.ListenerModule,
            resync_module_1.ResyncModule,
            manufacturers_module_1.ManufacturersModule,
            product_items_module_1.ProductItemsModule,
            products_module_1.ProductsModule,
            toxic_items_module_1.ToxicItemsModule,
            transactions_module_1.TransactionsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map