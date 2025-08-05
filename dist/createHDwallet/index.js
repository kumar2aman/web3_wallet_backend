"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const web3_js_1 = require("@solana/web3.js");
const bip39_1 = require("bip39");
const ed25519_hd_key_1 = require("ed25519-hd-key");
const tweetnacl_1 = __importDefault(require("tweetnacl"));
function main() {
    let result = [];
    const mnemonic = (0, bip39_1.generateMnemonic)(128);
    const seed = (0, bip39_1.mnemonicToSeedSync)(mnemonic);
    for (let i = 0; i < 4; i++) {
        const path = `m/44'/501'/${i}'/0'`;
        const derivedSeed = (0, ed25519_hd_key_1.derivePath)(path, seed.toString("hex")).key;
        //@ts-ignore
        const secret = tweetnacl_1.default.sign.keyPair.fromSeed(derivedSeed).secretKey;
        result.push(web3_js_1.Keypair.fromSecretKey(secret).publicKey.toBase58());
    }
    return result;
}
//# sourceMappingURL=index.js.map