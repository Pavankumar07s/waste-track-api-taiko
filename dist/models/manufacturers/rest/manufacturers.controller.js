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
exports.ManufacturersController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../common/prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
const query_dto_1 = require("./dtos/query.dto");
const swagger_2 = require("@nestjs/swagger");
const manufacturer_entity_1 = require("./entity/manufacturer.entity");
let ManufacturersController = class ManufacturersController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll({ skip, take, order, sortBy }) {
        return this.prisma.manufacturer.findMany({
            ...(skip ? { skip: +skip } : null),
            ...(take ? { take: +take } : null),
            ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
        });
    }
    findOne(id) {
        return this.prisma.manufacturer.findUnique({ where: { id } });
    }
};
exports.ManufacturersController = ManufacturersController;
__decorate([
    (0, swagger_2.ApiOkResponse)({ type: [manufacturer_entity_1.ManufacturerEntity] }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.ManufacturerQueryDto]),
    __metadata("design:returntype", void 0)
], ManufacturersController.prototype, "findAll", null);
__decorate([
    (0, swagger_2.ApiOkResponse)({ type: manufacturer_entity_1.ManufacturerEntity }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ManufacturersController.prototype, "findOne", null);
exports.ManufacturersController = ManufacturersController = __decorate([
    (0, swagger_1.ApiTags)('manufacturers'),
    (0, common_1.Controller)('manufacturers'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ManufacturersController);
//# sourceMappingURL=manufacturers.controller.js.map