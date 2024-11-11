import { PrismaService } from 'src/common/prisma/prisma.service';
import { ListenerService } from 'src/listener/listener.service';
export declare class ResyncController {
    private readonly prisma;
    private readonly listenerService;
    constructor(prisma: PrismaService, listenerService: ListenerService);
    resyncBlockchainData(apiSecret: string): Promise<"Resyncing DB" | {
        message: string;
    }>;
}
