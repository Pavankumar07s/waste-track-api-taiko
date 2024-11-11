import { Prisma } from '@prisma/client';
import { ProductItemOrderByWithRelationInput } from './order-by.args';
import { ProductItemWhereInput, ProductItemWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyProductItemArgsStrict implements RestrictProperties<FindManyProductItemArgsStrict, Omit<Prisma.ProductItemFindManyArgs, 'include' | 'select'>> {
    where: ProductItemWhereInput;
    orderBy: ProductItemOrderByWithRelationInput[];
    cursor: ProductItemWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ProductItemScalarFieldEnum[];
}
declare const FindManyProductItemArgs_base: import("@nestjs/common").Type<Partial<FindManyProductItemArgsStrict>>;
export declare class FindManyProductItemArgs extends FindManyProductItemArgs_base {
}
export declare class FindUniqueProductItemArgs {
    where: ProductItemWhereUniqueInput;
}
export {};
