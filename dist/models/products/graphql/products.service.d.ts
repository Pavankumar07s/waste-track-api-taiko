import { FindManyProductArgs, FindUniqueProductArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ProductsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(args: FindManyProductArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }[]>;
    findOne(args: FindUniqueProductArgs): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
