import { TransactionsService } from './transactions.service';
import { Transaction } from './entity/transaction.entity';
import { FindManyTransactionArgs, FindUniqueTransactionArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class TransactionsResolver {
    private readonly transactionsService;
    private readonly prisma;
    constructor(transactionsService: TransactionsService, prisma: PrismaService);
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
    productItem(transaction: Transaction): import(".prisma/client").Prisma.Prisma__ProductItemClient<{
        id: string;
        timestamp: Date;
        productId: string;
        status: import(".prisma/client").$Enums.ProductStatus;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
