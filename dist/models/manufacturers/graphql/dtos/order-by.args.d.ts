import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { ProductOrderByRelationAggregateInput } from 'src/models/products/graphql/dtos/order-by.args';
export declare class ManufacturerOrderByWithRelationInputStrict implements RestrictProperties<ManufacturerOrderByWithRelationInputStrict, Prisma.ManufacturerOrderByWithRelationInput> {
    id: Prisma.SortOrder;
    timestamp: Prisma.SortOrder;
    name: Prisma.SortOrder;
    location: Prisma.SortOrder;
    contact: Prisma.SortOrder;
    products: ProductOrderByRelationAggregateInput;
}
declare const ManufacturerOrderByWithRelationInput_base: import("@nestjs/common").Type<Partial<ManufacturerOrderByWithRelationInputStrict>>;
export declare class ManufacturerOrderByWithRelationInput extends ManufacturerOrderByWithRelationInput_base {
}
export declare class ManufacturerOrderByRelationAggregateInput {
    _count?: Prisma.SortOrder;
}
export {};
