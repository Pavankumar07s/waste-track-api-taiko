import { FindManyToxicItemArgs, FindUniqueToxicItemArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ToxicItemsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(args: FindManyToxicItemArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        name: string;
        weight: number;
        productId: string;
    }[]>;
    findOne(args: FindUniqueToxicItemArgs): import(".prisma/client").Prisma.Prisma__ToxicItemClient<{
        id: number;
        timestamp: Date;
        name: string;
        weight: number;
        productId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
