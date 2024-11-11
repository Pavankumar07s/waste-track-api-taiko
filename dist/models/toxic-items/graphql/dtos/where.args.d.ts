import { Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ProductRelationFilter } from 'src/models/products/graphql/dtos/where.args';
export declare class ToxicItemWhereUniqueInput {
    id: number;
}
export declare class ToxicItemWhereInputStrict implements RestrictProperties<ToxicItemWhereInputStrict, Prisma.ToxicItemWhereInput> {
    timestamp: DateTimeFilter;
    id: IntFilter;
    name: StringFilter;
    weight: IntFilter;
    productId: StringFilter;
    Product: ProductRelationFilter;
    AND: ToxicItemWhereInput[];
    OR: ToxicItemWhereInput[];
    NOT: ToxicItemWhereInput[];
}
declare const ToxicItemWhereInput_base: import("@nestjs/common").Type<Partial<ToxicItemWhereInputStrict>>;
export declare class ToxicItemWhereInput extends ToxicItemWhereInput_base {
}
export declare class ToxicItemListRelationFilter {
    every?: ToxicItemWhereInput;
    some?: ToxicItemWhereInput;
    none?: ToxicItemWhereInput;
}
export declare class ToxicItemRelationFilter {
    is?: ToxicItemWhereInput;
    isNot?: ToxicItemWhereInput;
}
export {};
