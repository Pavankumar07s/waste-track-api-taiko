import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from 'ethers';
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from '../common';
export interface RecycleChainInterface extends Interface {
    getFunction(nameOrSignature: 'addProduct' | 'addProductItems' | 'inventory' | 'manufacturers' | 'owner' | 'productCounter' | 'productItems' | 'products' | 'recycleProductItems' | 'registerManufacturer' | 'returnProductItems' | 'sellProductItems'): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: 'ManufacturerRegistered' | 'ProductCreated' | 'ProductItemsAdded' | 'ProductItemsStatusChanged' | 'ToxicItemCreated'): EventFragment;
    encodeFunctionData(functionFragment: 'addProduct', values: [string, string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: 'addProductItems', values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'inventory', values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: 'manufacturers', values: [AddressLike]): string;
    encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
    encodeFunctionData(functionFragment: 'productCounter', values?: undefined): string;
    encodeFunctionData(functionFragment: 'productItems', values: [string]): string;
    encodeFunctionData(functionFragment: 'products', values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: 'recycleProductItems', values: [string[]]): string;
    encodeFunctionData(functionFragment: 'registerManufacturer', values: [string, string, string]): string;
    encodeFunctionData(functionFragment: 'returnProductItems', values: [string[]]): string;
    encodeFunctionData(functionFragment: 'sellProductItems', values: [string[]]): string;
    decodeFunctionResult(functionFragment: 'addProduct', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'addProductItems', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'inventory', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'manufacturers', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'productCounter', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'productItems', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'products', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'recycleProductItems', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'registerManufacturer', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'returnProductItems', data: BytesLike): Result;
    decodeFunctionResult(functionFragment: 'sellProductItems', data: BytesLike): Result;
}
export declare namespace ManufacturerRegisteredEvent {
    type InputTuple = [
        manufacturer: AddressLike,
        name: string,
        location: string,
        contact: string
    ];
    type OutputTuple = [
        manufacturer: string,
        name: string,
        location: string,
        contact: string
    ];
    interface OutputObject {
        manufacturer: string;
        name: string;
        location: string;
        contact: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProductCreatedEvent {
    type InputTuple = [
        productId: BigNumberish,
        name: string,
        manufacturer: AddressLike
    ];
    type OutputTuple = [
        productId: bigint,
        name: string,
        manufacturer: string
    ];
    interface OutputObject {
        productId: bigint;
        name: string;
        manufacturer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProductItemsAddedEvent {
    type InputTuple = [itemIds: string[], productId: BigNumberish];
    type OutputTuple = [itemIds: string[], productId: bigint];
    interface OutputObject {
        itemIds: string[];
        productId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProductItemsStatusChangedEvent {
    type InputTuple = [itemIds: string[], status: BigNumberish];
    type OutputTuple = [itemIds: string[], status: bigint];
    interface OutputObject {
        itemIds: string[];
        status: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ToxicItemCreatedEvent {
    type InputTuple = [
        productId: BigNumberish,
        name: string,
        weight: BigNumberish
    ];
    type OutputTuple = [productId: bigint, name: string, weight: bigint];
    interface OutputObject {
        productId: bigint;
        name: string;
        weight: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface RecycleChain extends BaseContract {
    connect(runner?: ContractRunner | null): RecycleChain;
    waitForDeployment(): Promise<this>;
    interface: RecycleChainInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addProduct: TypedContractMethod<[
        _name: string,
        toxicNames: string[],
        toxicWeights: BigNumberish[]
    ], [
        void
    ], 'nonpayable'>;
    addProductItems: TypedContractMethod<[
        _productId: BigNumberish,
        _quantity: BigNumberish
    ], [
        void
    ], 'nonpayable'>;
    inventory: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], 'view'>;
    manufacturers: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            string,
            string,
            string
        ] & {
            name: string;
            location: string;
            contact: string;
        }
    ], 'view'>;
    owner: TypedContractMethod<[], [string], 'view'>;
    productCounter: TypedContractMethod<[], [bigint], 'view'>;
    productItems: TypedContractMethod<[
        arg0: string
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            id: string;
            productId: bigint;
            status: bigint;
        }
    ], 'view'>;
    products: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            string
        ] & {
            id: bigint;
            name: string;
            quantity: bigint;
            manufacturer: string;
        }
    ], 'view'>;
    recycleProductItems: TypedContractMethod<[
        itemIds: string[]
    ], [
        void
    ], 'nonpayable'>;
    registerManufacturer: TypedContractMethod<[
        _name: string,
        _location: string,
        _contact: string
    ], [
        void
    ], 'nonpayable'>;
    returnProductItems: TypedContractMethod<[
        itemIds: string[]
    ], [
        void
    ], 'nonpayable'>;
    sellProductItems: TypedContractMethod<[
        itemIds: string[]
    ], [
        void
    ], 'nonpayable'>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: 'addProduct'): TypedContractMethod<[
        _name: string,
        toxicNames: string[],
        toxicWeights: BigNumberish[]
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'addProductItems'): TypedContractMethod<[
        _productId: BigNumberish,
        _quantity: BigNumberish
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'inventory'): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        string
    ], 'view'>;
    getFunction(nameOrSignature: 'manufacturers'): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [
            string,
            string,
            string
        ] & {
            name: string;
            location: string;
            contact: string;
        }
    ], 'view'>;
    getFunction(nameOrSignature: 'owner'): TypedContractMethod<[], [string], 'view'>;
    getFunction(nameOrSignature: 'productCounter'): TypedContractMethod<[], [bigint], 'view'>;
    getFunction(nameOrSignature: 'productItems'): TypedContractMethod<[
        arg0: string
    ], [
        [
            string,
            bigint,
            bigint
        ] & {
            id: string;
            productId: bigint;
            status: bigint;
        }
    ], 'view'>;
    getFunction(nameOrSignature: 'products'): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            string
        ] & {
            id: bigint;
            name: string;
            quantity: bigint;
            manufacturer: string;
        }
    ], 'view'>;
    getFunction(nameOrSignature: 'recycleProductItems'): TypedContractMethod<[itemIds: string[]], [void], 'nonpayable'>;
    getFunction(nameOrSignature: 'registerManufacturer'): TypedContractMethod<[
        _name: string,
        _location: string,
        _contact: string
    ], [
        void
    ], 'nonpayable'>;
    getFunction(nameOrSignature: 'returnProductItems'): TypedContractMethod<[itemIds: string[]], [void], 'nonpayable'>;
    getFunction(nameOrSignature: 'sellProductItems'): TypedContractMethod<[itemIds: string[]], [void], 'nonpayable'>;
    getEvent(key: 'ManufacturerRegistered'): TypedContractEvent<ManufacturerRegisteredEvent.InputTuple, ManufacturerRegisteredEvent.OutputTuple, ManufacturerRegisteredEvent.OutputObject>;
    getEvent(key: 'ProductCreated'): TypedContractEvent<ProductCreatedEvent.InputTuple, ProductCreatedEvent.OutputTuple, ProductCreatedEvent.OutputObject>;
    getEvent(key: 'ProductItemsAdded'): TypedContractEvent<ProductItemsAddedEvent.InputTuple, ProductItemsAddedEvent.OutputTuple, ProductItemsAddedEvent.OutputObject>;
    getEvent(key: 'ProductItemsStatusChanged'): TypedContractEvent<ProductItemsStatusChangedEvent.InputTuple, ProductItemsStatusChangedEvent.OutputTuple, ProductItemsStatusChangedEvent.OutputObject>;
    getEvent(key: 'ToxicItemCreated'): TypedContractEvent<ToxicItemCreatedEvent.InputTuple, ToxicItemCreatedEvent.OutputTuple, ToxicItemCreatedEvent.OutputObject>;
    filters: {
        'ManufacturerRegistered(address,string,string,string)': TypedContractEvent<ManufacturerRegisteredEvent.InputTuple, ManufacturerRegisteredEvent.OutputTuple, ManufacturerRegisteredEvent.OutputObject>;
        ManufacturerRegistered: TypedContractEvent<ManufacturerRegisteredEvent.InputTuple, ManufacturerRegisteredEvent.OutputTuple, ManufacturerRegisteredEvent.OutputObject>;
        'ProductCreated(uint256,string,address)': TypedContractEvent<ProductCreatedEvent.InputTuple, ProductCreatedEvent.OutputTuple, ProductCreatedEvent.OutputObject>;
        ProductCreated: TypedContractEvent<ProductCreatedEvent.InputTuple, ProductCreatedEvent.OutputTuple, ProductCreatedEvent.OutputObject>;
        'ProductItemsAdded(string[],uint256)': TypedContractEvent<ProductItemsAddedEvent.InputTuple, ProductItemsAddedEvent.OutputTuple, ProductItemsAddedEvent.OutputObject>;
        ProductItemsAdded: TypedContractEvent<ProductItemsAddedEvent.InputTuple, ProductItemsAddedEvent.OutputTuple, ProductItemsAddedEvent.OutputObject>;
        'ProductItemsStatusChanged(string[],uint8)': TypedContractEvent<ProductItemsStatusChangedEvent.InputTuple, ProductItemsStatusChangedEvent.OutputTuple, ProductItemsStatusChangedEvent.OutputObject>;
        ProductItemsStatusChanged: TypedContractEvent<ProductItemsStatusChangedEvent.InputTuple, ProductItemsStatusChangedEvent.OutputTuple, ProductItemsStatusChangedEvent.OutputObject>;
        'ToxicItemCreated(uint256,string,uint256)': TypedContractEvent<ToxicItemCreatedEvent.InputTuple, ToxicItemCreatedEvent.OutputTuple, ToxicItemCreatedEvent.OutputObject>;
        ToxicItemCreated: TypedContractEvent<ToxicItemCreatedEvent.InputTuple, ToxicItemCreatedEvent.OutputTuple, ToxicItemCreatedEvent.OutputObject>;
    };
}
