import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ProductOrderByWithRelationInput } from 'src/models/products/graphql/dtos/order-by.args';
export declare class ToxicItemOrderByWithRelationInputStrict implements RestrictProperties<ToxicItemOrderByWithRelationInputStrict, Prisma.ToxicItemOrderByWithRelationInput> {
    timestamp: Prisma.SortOrder;
    id: Prisma.SortOrder;
    name: Prisma.SortOrder;
    weight: Prisma.SortOrder;
    productId: Prisma.SortOrder;
    Product: ProductOrderByWithRelationInput;
}
declare const ToxicItemOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ToxicItemOrderByWithRelationInputStrict>>;
export declare class ToxicItemOrderByWithRelationInput extends ToxicItemOrderByWithRelationInput_base {
}
export declare class ToxicItemOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
