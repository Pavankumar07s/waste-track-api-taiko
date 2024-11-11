import { $Enums, ProductItem } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class ProductItemEntity implements RestrictProperties<ProductItemEntity, ProductItem> {
    id: string;
    timestamp: Date;
    productId: string;
    status: $Enums.ProductStatus;
}
