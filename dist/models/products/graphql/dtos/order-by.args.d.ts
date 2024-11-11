import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ManufacturerOrderByWithRelationInput } from 'src/models/manufacturers/graphql/dtos/order-by.args';
import { ProductItemOrderByRelationAggregateInput } from 'src/models/product-items/graphql/dtos/order-by.args';
import { ToxicItemOrderByRelationAggregateInput } from 'src/models/toxic-items/graphql/dtos/order-by.args';
export declare class ProductOrderByWithRelationInputStrict implements RestrictProperties<ProductOrderByWithRelationInputStrict, Prisma.ProductOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    timestamp: Prisma.SortOrder;
    name: Prisma.SortOrder;
    manufacturerId: Prisma.SortOrder;
    manufacturer: ManufacturerOrderByWithRelationInput;
    productItems: ProductItemOrderByRelationAggregateInput;
    toxicItems: ToxicItemOrderByRelationAggregateInput;
}
declare const ProductOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ProductOrderByWithRelationInputStrict>>;
export declare class ProductOrderByWithRelationInput extends ProductOrderByWithRelationInput_base {
}
export declare class ProductOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
