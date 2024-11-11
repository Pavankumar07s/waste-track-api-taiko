import { ProductsService } from './products.service';
import { Product } from './entity/product.entity';
import { FindManyProductArgs, FindUniqueProductArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductWhereInput } from './dtos/where.args';
import { ProductStatus } from '@prisma/client';
export declare class ProductsResolver {
    private readonly productsService;
    private readonly prisma;
    constructor(productsService: ProductsService, prisma: PrismaService);
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
    manufacturer(product: any): import(".prisma/client").Prisma.Prisma__ManufacturerClient<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    productItems(product: Product): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    toxicItems(product: Product): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        name: string;
        weight: number;
        productId: string;
    }[]>;
    totalCount(parent: Product): Promise<number>;
    productsCount(where: ProductWhereInput): Promise<number>;
    getCountPerStatus(parent: Product, status: ProductStatus): Promise<number>;
}
