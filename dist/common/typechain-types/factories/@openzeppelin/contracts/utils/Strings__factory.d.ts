import { ContractFactory, ContractTransactionResponse } from 'ethers';
import type { Signer, ContractDeployTransaction, ContractRunner } from 'ethers';
import type { NonPayableOverrides } from '../../../../common';
import type { Strings, StringsInterface } from '../../../../@openzeppelin/contracts/utils/Strings';
type StringsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Strings__factory extends ContractFactory {
    constructor(...args: StringsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Strings & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Strings__factory;
    static readonly bytecode = "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122022ea8e82b761ff0f2c8fae5d36bcca20db5176a1081cc893147086b57be5cf8f64736f6c63430008180033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "StringsInsufficientHexLength";
        readonly type: "error";
    }];
    static createInterface(): StringsInterface;
    static connect(address: string, runner?: ContractRunner | null): Strings;
}
export {};
