import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ProductItemOrderByWithRelationInput } from 'src/models/product-items/graphql/dtos/order-by.args';
export declare class TransactionOrderByWithRelationInputStrict implements RestrictProperties<TransactionOrderByWithRelationInputStrict, Prisma.TransactionOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    timestamp: Prisma.SortOrder;
    productItemId: Prisma.SortOrder;
    status: Prisma.SortOrder;
    productItem: ProductItemOrderByWithRelationInput;
}
declare const TransactionOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<TransactionOrderByWithRelationInputStrict>>;
export declare class TransactionOrderByWithRelationInput extends TransactionOrderByWithRelationInput_base {
}
export declare class TransactionOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
