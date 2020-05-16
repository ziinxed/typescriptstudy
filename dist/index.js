"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
let Block = /** @class */ (() => {
    class Block {
        constructor(index, hash, previousHash, data, timestamp) {
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }
    }
    Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
    return Block;
})();
const genesisBlock = new Block(0, "20202020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const nextHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, nextHash, previousBlock.hash, data, newTimeStamp);
    return newBlock;
};
console.log(createNewBlock("hello"), createNewBlock("bye bye"));
//# sourceMappingURL=index.js.map