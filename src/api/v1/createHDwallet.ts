import { Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";

import { Router } from "express";
import { mnemonic } from "../../controllers/createMnemonic";

const router: Router = Router();

router.get("/createhdwallet", (req, res) => {
  function main(): string[] {
    let result = [];

    const seed = mnemonicToSeedSync(mnemonic);

    for (let i = 0; i < 1; i++) {
      const path = `m/44'/501'/${i}'/0'`;

      const derivedSeedBuffer = derivePath(path, seed.toString("hex")).key;

      const derivedSeed = new Uint8Array(derivedSeedBuffer);

      const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

      result.push(Keypair.fromSecretKey(secret).publicKey.toBase58());

      const base64Key = Buffer.from(secret).toString('base64');

      console.log(base64Key)
    }

    return result;
  }

   const key = main();

console.log(key);

  // res.json({
  //   data: key,
  // });
});

export default router;
