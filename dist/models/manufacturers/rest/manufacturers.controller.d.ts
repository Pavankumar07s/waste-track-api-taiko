import { PrismaService } from 'src/common/prisma/prisma.service';
import { ManufacturerQueryDto } from './dtos/query.dto';
export declare class ManufacturersController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, order, sortBy }: ManufacturerQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ManufacturerClient<{
        id: string;
        timestamp: Date;
        name: string;
        location: string;
        contact: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
