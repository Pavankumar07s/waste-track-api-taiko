import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductItemQueryDto } from './dtos/query.dto';
export declare class ProductItemsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, order, sortBy }: ProductItemQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductItemClient<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
