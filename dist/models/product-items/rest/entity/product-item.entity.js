"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
(0, graphql_1.registerEnumType)(client_1.$Enums.ProductStatus, { name: 'ProductStatus' });
class ProductItemEntity {
}
exports.ProductItemEntity = ProductItemEntity;
//# sourceMappingURL=product-item.entity.js.map