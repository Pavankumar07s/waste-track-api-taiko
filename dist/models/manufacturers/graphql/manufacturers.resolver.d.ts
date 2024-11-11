import { ManufacturersService } from './manufacturers.service';
import { Manufacturer } from './entity/manufacturer.entity';
import { FindManyManufacturerArgs, FindUniqueManufacturerArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { ManufacturerWhereInput } from './dtos/where.args';
import { ProductStatus } from '@prisma/client';
export declare class ManufacturersResolver {
    private readonly manufacturersService;
    private readonly prisma;
    constructor(manufacturersService: ManufacturersService, prisma: PrismaService);
    findAll(args: FindManyManufacturerArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }[]>;
    findOne(args: FindUniqueManufacturerArgs): import(".prisma/client").Prisma.Prisma__ManufacturerClient<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    products(manufacturer: Manufacturer): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }[]>;
    manufacturersCount(where: ManufacturerWhereInput): Promise<number>;
    totalCount(manufacturer: Manufacturer): Promise<number>;
    getCountPerStatus(parent: Manufacturer, status: ProductStatus): Promise<number>;
    productsCount(manufacturer: Manufacturer): Promise<number>;
}
