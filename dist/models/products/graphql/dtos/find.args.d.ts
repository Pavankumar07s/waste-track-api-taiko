import { Prisma } from '@prisma/client';
import { ProductOrderByWithRelationInput } from './order-by.args';
import { ProductWhereInput, ProductWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyProductArgsStrict implements RestrictProperties<FindManyProductArgsStrict, Omit<Prisma.ProductFindManyArgs, 'include' | 'select'>> {
    where: ProductWhereInput;
    orderBy: ProductOrderByWithRelationInput[];
    cursor: ProductWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ProductScalarFieldEnum[];
}
declare const FindManyProductArgs_base: import("@nestjs/common").Type<Partial<FindManyProductArgsStrict>>;
export declare class FindManyProductArgs extends FindManyProductArgs_base {
}
export declare class FindUniqueProductArgs {
    where: ProductWhereUniqueInput;
}
export {};
