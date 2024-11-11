import { Prisma } from '@prisma/client';
import { ManufacturerOrderByWithRelationInput } from './order-by.args';
import { ManufacturerWhereInput, ManufacturerWhereUniqueInput } from './where.args';
import { RestrictProperties } from 'src/common/dtos/common.input';
declare class FindManyManufacturerArgsStrict implements RestrictProperties<FindManyManufacturerArgsStrict, Omit<Prisma.ManufacturerFindManyArgs, 'include' | 'select'>> {
    where: ManufacturerWhereInput;
    orderBy: ManufacturerOrderByWithRelationInput[];
    cursor: ManufacturerWhereUniqueInput;
    take: number;
    skip: number;
    distinct: Prisma.ManufacturerScalarFieldEnum[];
}
declare const FindManyManufacturerArgs_base: import("@nestjs/common").Type<Partial<FindManyManufacturerArgsStrict>>;
export declare class FindManyManufacturerArgs extends FindManyManufacturerArgs_base {
}
export declare class FindUniqueManufacturerArgs {
    where: ManufacturerWhereUniqueInput;
}
export {};
