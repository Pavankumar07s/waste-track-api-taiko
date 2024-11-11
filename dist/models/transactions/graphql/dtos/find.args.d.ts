import { Prisma } from '@prisma/client';
import { TransactionOrderByWithRelationInput } from './order-by.args';
import { TransactionWhereInput, TransactionWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyTransactionArgsStrict implements RestrictProperties<FindManyTransactionArgsStrict, Omit<Prisma.TransactionFindManyArgs, 'include' | 'select'>> {
    where: TransactionWhereInput;
    orderBy: TransactionOrderByWithRelationInput[];
    cursor: TransactionWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.TransactionScalarFieldEnum[];
}
declare const FindManyTransactionArgs_base: import("@nestjs/common").Type<Partial<FindManyTransactionArgsStrict>>;
export declare class FindManyTransactionArgs extends FindManyTransactionArgs_base {
}
export declare class FindUniqueTransactionArgs {
    where: TransactionWhereUniqueInput;
}
export {};
