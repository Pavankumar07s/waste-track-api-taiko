import { FindManyTransactionArgs, FindUniqueTransactionArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class TransactionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(args: FindManyTransactionArgs): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        timestamp: Date;
        productItemId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }[]>;
    findOne(args: FindUniqueTransactionArgs): import(".prisma/client").Prisma.Prisma__TransactionClient<{
        id: number;
        timestamp: Date;
        productItemId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
