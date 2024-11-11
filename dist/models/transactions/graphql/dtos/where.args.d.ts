import { $Enums, Prisma } from '@prisma/client';
import { DateTimeFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ProductItemRelationFilter } from 'src/models/product-items/graphql/dtos/where.args';
export declare class TransactionWhereUniqueInput {
    id: number;
}
export declare class TransactionWhereInputStrict implements RestrictProperties<TransactionWhereInputStrict, Prisma.TransactionWhereInput> {
    id: IntFilter;
    timestamp: DateTimeFilter;
    productItemId: StringFilter;
    status: $Enums.ProductStatus;
    productItem: ProductItemRelationFilter;
    AND: TransactionWhereInput[];
    OR: TransactionWhereInput[];
    NOT: TransactionWhereInput[];
}
declare const TransactionWhereInput_base: import("@nestjs/common").Type<Partial<TransactionWhereInputStrict>>;
export declare class TransactionWhereInput extends TransactionWhereInput_base {
}
export declare class TransactionListRelationFilter {
    every?: TransactionWhereInput;
    some?: TransactionWhereInput;
    none?: TransactionWhereInput;
}
export declare class TransactionRelationFilter {
    is?: TransactionWhereInput;
    isNot?: TransactionWhereInput;
}
export {};
