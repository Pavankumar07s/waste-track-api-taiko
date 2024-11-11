import { $Enums, ProductItem as ProductItemType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class ProductItem implements RestrictProperties<ProductItem, ProductItemType> {
    id: string;
    timestamp: Date;
    productId: string;
    status: $Enums.ProductStatus;
}
