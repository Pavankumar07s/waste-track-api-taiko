import { Product as ProductType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Product implements RestrictProperties<Product, ProductType> {
    id: string;
    timestamp: Date;
    name: string;
    manufacturerId: string;
}
