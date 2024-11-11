import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ListenerService implements OnModuleInit, OnModuleDestroy {
    private readonly prisma;
    private provider;
    private contract;
    constructor(prisma: PrismaService);
    onModuleInit(): void;
    onModuleDestroy(): void;
    initializeWebSocketProvider(): void;
    subscribeToEvents(): void;
    resyncBlockchainData(): Promise<void>;
    cleanup(): void;
    getBlockTimeStamp(blockNumber: number): Promise<Date>;
    private createManufacturer;
    private createProduct;
    private createProductItems;
    private updateProductItemStatus;
    private createToxicItem;
}
