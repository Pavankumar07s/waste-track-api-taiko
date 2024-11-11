import { Prisma } from '@prisma/client';
import { ToxicItemOrderByWithRelationInput } from './order-by.args';
import { ToxicItemWhereInput, ToxicItemWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyToxicItemArgsStrict implements RestrictProperties<FindManyToxicItemArgsStrict, Omit<Prisma.ToxicItemFindManyArgs, 'include' | 'select'>> {
    where: ToxicItemWhereInput;
    orderBy: ToxicItemOrderByWithRelationInput[];
    cursor: ToxicItemWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ToxicItemScalarFieldEnum[];
}
declare const FindManyToxicItemArgs_base: import("@nestjs/common").Type<Partial<FindManyToxicItemArgsStrict>>;
export declare class FindManyToxicItemArgs extends FindManyToxicItemArgs_base {
}
export declare class FindUniqueToxicItemArgs {
    where: ToxicItemWhereUniqueInput;
}
export {};
