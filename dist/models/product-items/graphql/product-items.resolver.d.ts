import { ProductItemsService } from './product-items.service';
import { ProductItem } from './entity/product-item.entity';
import { FindManyProductItemArgs, FindUniqueProductItemArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductItemWhereInput } from './dtos/where.args';
export declare class ProductItemsResolver {
    private readonly productItemsService;
    private readonly prisma;
    constructor(productItemsService: ProductItemsService, prisma: PrismaService);
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
    product(productItem: ProductItem): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    transactions(productItem: ProductItem): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        productItemId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    productItemsCount(where: ProductItemWhereInput): Promise<number>;
}
