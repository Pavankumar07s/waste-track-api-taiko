import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ProductOrderByWithRelationInput } from 'src/models/products/graphql/dtos/order-by.args';
import { TransactionOrderByRelationAggregateInput } from 'src/models/transactions/graphql/dtos/order-by.args';
export declare class ProductItemOrderByWithRelationInputStrict implements RestrictProperties<ProductItemOrderByWithRelationInputStrict, Prisma.ProductItemOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    timestamp: Prisma.SortOrder;
    productId: Prisma.SortOrder;
    status: Prisma.SortOrder;
    product: ProductOrderByWithRelationInput;
    transactions: TransactionOrderByRelationAggregateInput;
}
declare const ProductItemOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ProductItemOrderByWithRelationInputStrict>>;
export declare class ProductItemOrderByWithRelationInput extends ProductItemOrderByWithRelationInput_base {
}
export declare class ProductItemOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
