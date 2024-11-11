import { PrismaService } from 'src/common/prisma/prisma.service';
import { ProductQueryDto } from './dtos/query.dto';
export declare class ProductsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, order, sortBy }: ProductQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        timestamp: Date;
        name: string;
        manufacturerId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
