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
exports.ResyncController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/prisma/prisma.service");
const listener_service_1 = require("../listener/listener.service");
let ResyncController = class ResyncController {
    constructor(prisma, listenerService) {
        this.prisma = prisma;
        this.listenerService = listenerService;
    }
    async resyncBlockchainData(apiSecret) {
        if (apiSecret !== process.env.API_SECRET) {
            throw new common_1.ForbiddenException();
        }
        console.log('Resetting database...');
        try {
            await this.prisma.transaction.deleteMany();
            await this.prisma.productItem.deleteMany();
            await this.prisma.toxicItem.deleteMany();
            await this.prisma.product.deleteMany();
            await this.prisma.manufacturer.deleteMany();
            console.log('All tables cleared.');
            await this.listenerService.resyncBlockchainData();
            return { message: 'Database reset successfully.' };
        }
        catch (error) {
            console.error('Error resetting the database:', error);
            throw new common_1.InternalServerErrorException();
        }
        return 'Resyncing DB';
    }
};
exports.ResyncController = ResyncController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('x-api-secret')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResyncController.prototype, "resyncBlockchainData", null);
exports.ResyncController = ResyncController = __decorate([
    (0, common_1.Controller)('resync-blockchain-data'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        listener_service_1.ListenerService])
], ResyncController);
//# sourceMappingURL=resync.controller.js.map