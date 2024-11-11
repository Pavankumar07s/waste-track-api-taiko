"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Strings__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'length',
                type: 'uint256',
            },
        ],
        name: 'StringsInsufficientHexLength',
        type: 'error',
    },
];
const _bytecode = '0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122022ea8e82b761ff0f2c8fae5d36bcca20db5176a1081cc893147086b57be5cf8f64736f6c63430008180033';
const isSuperArgs = (xs) => xs.length > 1;
class Strings__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static createInterface() {
        return new ethers_1.Interface(_abi);
    }
    static connect(address, runner) {
        return new ethers_1.Contract(address, _abi, runner);
    }
}
exports.Strings__factory = Strings__factory;
Strings__factory.bytecode = _bytecode;
Strings__factory.abi = _abi;
//# sourceMappingURL=Strings__factory.js.map