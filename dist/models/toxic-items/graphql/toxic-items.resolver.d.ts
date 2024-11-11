import { ToxicItemsService } from './toxic-items.service';
import { ToxicItem } from './entity/toxic-item.entity';
import { FindManyToxicItemArgs, FindUniqueToxicItemArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ToxicItemsResolver {
    private readonly toxicItemsService;
    private readonly prisma;
    constructor(toxicItemsService: ToxicItemsService, prisma: PrismaService);
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
    product(toxicItem: ToxicItem): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
