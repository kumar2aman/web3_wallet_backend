"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
const keyPair = web3_js_1.Keypair.generate();
const publicKey = keyPair.publicKey.toBase58();
const privateKey = keyPair.secretKey;
console.log("publickey is ", publicKey);
console.log("private key is ", privateKey);
const message = new TextEncoder().encode("hello cat");
const signture = tweetnacl_1.default.sign.detached(message, privateKey);
const Decoded = tweetnacl_1.default.sign.detached.verify(message, signture, keyPair.publicKey.toBytes());
console.log(Decoded);
//# sourceMappingURL=index.js.map