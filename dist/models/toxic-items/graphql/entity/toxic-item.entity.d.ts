import { ToxicItem as ToxicItemType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class ToxicItem implements RestrictProperties<ToxicItem, ToxicItemType> {
    timestamp: Date;
    id: number;
    name: string;
    weight: number;
    productId: string;
}
