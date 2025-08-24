import { Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";

import { mnemonic } from "../../controllers/createMnemonic";


interface Keypairs {
  data: {
     publicKey: string,
    privateKey: string
  }
   
} 

export function main():Keypairs | undefined {
  const seed = mnemonicToSeedSync(mnemonic);

  for (let i = 0; i < 1; i++) {
    const path = `m/44'/501'/${i}'/0'`;

    const derivedSeedBuffer = derivePath(path, seed.toString("hex")).key;

    const derivedSeed = new Uint8Array(derivedSeedBuffer);

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const publicKey = (Keypair.fromSecretKey(secret).publicKey.toBase58());

    const privateKey = Buffer.from(secret).toString("base64");


     return {
    data: {
      publicKey,
      privateKey
    }
  };
  }


 
}
