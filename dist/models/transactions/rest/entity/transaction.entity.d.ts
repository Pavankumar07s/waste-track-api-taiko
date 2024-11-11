import { $Enums, Transaction } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class TransactionEntity implements RestrictProperties<TransactionEntity, Transaction> {
    id: number;
    timestamp: Date;
    productItemId: string;
    status: $Enums.ProductStatus;
}
