import { Prisma } from '@prisma/client';
import { DateTimeFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ManufacturerRelationFilter } from 'src/models/manufacturers/graphql/dtos/where.args';
import { ProductItemListRelationFilter } from 'src/models/product-items/graphql/dtos/where.args';
import { ToxicItemListRelationFilter } from 'src/models/toxic-items/graphql/dtos/where.args';
export declare class ProductWhereUniqueInput {
    id: string;
}
export declare class ProductWhereInputStrict implements RestrictProperties<ProductWhereInputStrict, Prisma.ProductWhereInput> {
    id: StringFilter;
    timestamp: DateTimeFilter;
    name: StringFilter;
    manufacturerId: StringFilter;
    manufacturer: ManufacturerRelationFilter;
    productItems: ProductItemListRelationFilter;
    toxicItems: ToxicItemListRelationFilter;
    AND: ProductWhereInput[];
    OR: ProductWhereInput[];
    NOT: ProductWhereInput[];
}
declare const ProductWhereInput_base: import("@nestjs/common").Type<Partial<ProductWhereInputStrict>>;
export declare class ProductWhereInput extends ProductWhereInput_base {
}
export declare class ProductListRelationFilter {
    every?: ProductWhereInput;
    some?: ProductWhereInput;
    none?: ProductWhereInput;
}
export declare class ProductRelationFilter {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
}
export {};
