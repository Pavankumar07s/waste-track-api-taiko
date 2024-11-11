import { PrismaService } from 'src/common/prisma/prisma.service';
import { TransactionQueryDto } from './dtos/query.dto';
export declare class TransactionsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll({ skip, take, order, sortBy }: TransactionQueryDto): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        productItemId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__TransactionClient<{
        id: number;
        timestamp: Date;
        productItemId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
