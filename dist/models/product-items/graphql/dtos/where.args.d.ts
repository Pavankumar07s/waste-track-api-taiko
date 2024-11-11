import { $Enums, Prisma } from '@prisma/client';
import { DateTimeFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ProductRelationFilter } from 'src/models/products/graphql/dtos/where.args';
import { TransactionListRelationFilter } from 'src/models/transactions/graphql/dtos/where.args';
export declare class ProductItemWhereUniqueInput {
    id: string;
}
export declare class ProductItemWhereInputStrict implements RestrictProperties<ProductItemWhereInputStrict, Prisma.ProductItemWhereInput> {
    id: StringFilter;
    timestamp: DateTimeFilter;
    productId: StringFilter;
    status: $Enums.ProductStatus;
    product: ProductRelationFilter;
    transactions: TransactionListRelationFilter;
    AND: ProductItemWhereInput[];
    OR: ProductItemWhereInput[];
    NOT: ProductItemWhereInput[];
}
declare const ProductItemWhereInput_base: import("@nestjs/common").Type<Partial<ProductItemWhereInputStrict>>;
export declare class ProductItemWhereInput extends ProductItemWhereInput_base {
}
export declare class ProductItemListRelationFilter {
    every?: ProductItemWhereInput;
    some?: ProductItemWhereInput;
    none?: ProductItemWhereInput;
}
export declare class ProductItemRelationFilter {
    is?: ProductItemWhereInput;
    isNot?: ProductItemWhereInput;
}
export {};
