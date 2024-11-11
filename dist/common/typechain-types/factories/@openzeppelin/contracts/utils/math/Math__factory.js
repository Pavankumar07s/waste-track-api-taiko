"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Math__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: 'MathOverflowedMulDiv',
        type: 'error',
    },
];
const _bytecode = '0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212205f1847e716d326528b8b9324e0228d1e4971145e5ba1173b4269248a23a4838564736f6c63430008180033';
const isSuperArgs = (xs) => xs.length > 1;
class Math__factory extends ethers_1.ContractFactory {
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
exports.Math__factory = Math__factory;
Math__factory.bytecode = _bytecode;
Math__factory.abi = _abi;
//# sourceMappingURL=Math__factory.js.map