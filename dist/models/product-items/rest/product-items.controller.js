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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductItemsController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
const query_dto_1 = require("./dtos/query.dto");
const swagger_2 = require("@nestjs/swagger");
const product_item_entity_1 = require("./entity/product-item.entity");
let ProductItemsController = class ProductItemsController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll({ skip, take, order, sortBy }) {
        return this.prisma.productItem.findMany({
            ...(skip ? { skip: +skip } : null),
            ...(take ? { take: +take } : null),
            ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
        });
    }
    findOne(id) {
        return this.prisma.productItem.findUnique({ where: { id } });
    }
};
exports.ProductItemsController = ProductItemsController;
__decorate([
    (0, swagger_2.ApiOkResponse)({ type: [product_item_entity_1.ProductItemEntity] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.ProductItemQueryDto]),
    __metadata("design:returntype", void 0)
], ProductItemsController.prototype, "findAll", null);
__decorate([
    (0, swagger_2.ApiOkResponse)({ type: product_item_entity_1.ProductItemEntity }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductItemsController.prototype, "findOne", null);
exports.ProductItemsController = ProductItemsController = __decorate([
    (0, swagger_1.ApiTags)('product-items'),
    (0, common_1.Controller)('product-items'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductItemsController);
//# sourceMappingURL=product-items.controller.js.map