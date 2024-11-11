import { Manufacturer } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class ManufacturerEntity implements RestrictProperties<ManufacturerEntity, Manufacturer> {
    id: string;
    timestamp: Date;
    name: string;
    location: string;
    contact: string;
}
