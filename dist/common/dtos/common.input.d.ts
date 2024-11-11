import { Prisma } from '@prisma/client';
export type RestrictProperties<T, U> = {
    [K in keyof T]: K extends keyof U ? T[K] : never;
} & Required<U>;
export declare class DateTimeFilter {
    equals?: string;
    in?: string[];
    notIn?: string[];
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: string[];
    notIn?: string[];
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: string;
    mode?: Prisma.QueryMode;
}
export declare class StringListFilter {
    equals?: string[];
    has?: string;
    hasEvery?: string[];
    hasSome?: string[];
    isEmpty?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: boolean;
}
export declare class IntFilter {
    equals?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
}
export declare class FloatFilter {
    equals?: number;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: number;
}
export declare class AggregateCountOutput {
    count: number;
}
export declare class PaginationInput {
    take?: number;
    skip?: number;
}
