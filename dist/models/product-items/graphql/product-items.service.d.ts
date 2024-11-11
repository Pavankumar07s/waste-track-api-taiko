import { FindManyProductItemArgs, FindUniqueProductItemArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ProductItemsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(args: FindManyProductItemArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    findOne(args: FindUniqueProductItemArgs): import(".prisma/client").Prisma.Prisma__ProductItemClient<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
