import { FindManyManufacturerArgs, FindUniqueManufacturerArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class ManufacturersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(args: FindManyManufacturerArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }[]>;
    findOne({ where: { id } }: FindUniqueManufacturerArgs): import(".prisma/client").Prisma.Prisma__ManufacturerClient<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
