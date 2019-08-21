const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(timestamp,data,previousHash=" " ) {
        this.timestamp = timestamp;
        this.data=data;
        this.previousHash = previousHash;

        //when creating new Block, automatically calculate its HASh
        this.hash = this.calculateHash();
    }
    calculateHash() {
        return SHA256(this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

class Blockchain{
    constructor(){
        this.chain=[this.createGenesisBlock()]
    }
}