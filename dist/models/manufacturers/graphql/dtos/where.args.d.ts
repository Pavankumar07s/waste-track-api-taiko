import { Prisma } from '@prisma/client';
import { DateTimeFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { ProductListRelationFilter } from 'src/models/products/graphql/dtos/where.args';
export declare class ManufacturerWhereUniqueInput {
    id: string;
}
export declare class ManufacturerWhereInputStrict implements RestrictProperties<ManufacturerWhereInputStrict, Prisma.ManufacturerWhereInput> {
    id: StringFilter;
    timestamp: DateTimeFilter;
    name: StringFilter;
    location: StringFilter;
    contact: StringFilter;
    products: ProductListRelationFilter;
    AND: ManufacturerWhereInput[];
    OR: ManufacturerWhereInput[];
    NOT: ManufacturerWhereInput[];
}
declare const ManufacturerWhereInput_base: import("@nestjs/common").Type<Partial<ManufacturerWhereInputStrict>>;
export declare class ManufacturerWhereInput extends ManufacturerWhereInput_base {
}
export declare class ManufacturerListRelationFilter {
    every?: ManufacturerWhereInput;
    some?: ManufacturerWhereInput;
    none?: ManufacturerWhereInput;
}
export declare class ManufacturerRelationFilter {
    is?: ManufacturerWhereInput;
    isNot?: ManufacturerWhereInput;
}
export {};
