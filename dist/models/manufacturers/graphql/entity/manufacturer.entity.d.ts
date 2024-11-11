import { Manufacturer as ManufacturerType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
export declare class Manufacturer implements RestrictProperties<Manufacturer, ManufacturerType> {
    id: string;
    name: string;
    timestamp: Date;
    location: string;
    contact: string;
}
