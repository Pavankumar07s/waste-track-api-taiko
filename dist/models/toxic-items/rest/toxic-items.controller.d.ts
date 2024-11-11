import { PrismaService } from 'src/common/prisma/prisma.service';
import { ToxicItemQueryDto } from './dtos/query.dto';
export declare class ToxicItemsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, order, sortBy }: ToxicItemQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        name: string;
        weight: number;
        productId: string;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ToxicItemClient<{
        id: number;
        timestamp: Date;
        name: string;
        weight: number;
        productId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
