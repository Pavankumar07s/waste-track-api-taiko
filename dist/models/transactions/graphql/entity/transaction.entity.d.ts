import { $Enums, Transaction as TransactionType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Transaction implements RestrictProperties<Transaction, TransactionType> {
    id: number;
    timestamp: Date;
    productItemId: string;
    status: $Enums.ProductStatus;
}
