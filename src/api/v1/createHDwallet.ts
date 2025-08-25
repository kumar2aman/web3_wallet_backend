import { Keypair } from "@solana/web3.js";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Router } from "express";
import nacl from "tweetnacl";


const router: Router = Router();

interface Keypairs {
  data: {
    publicKey: string;
    privateKey: string;
  };
}

router.post("/createhdmnemonic", async (req, res) => {
  const data = req.body;

  const mnemonic = data.join(",");
  
  const response = main(mnemonic);

  console.log("coming form frontend ",data);

  console.log("coming form backend ",response);
  res.json({
    data: response,
  });
});

export function main(mnemonic: string): Keypairs | undefined {
  const seed = mnemonicToSeedSync(mnemonic);

  for (let i = 0; i < 1; i++) {
    const path = `m/44'/501'/${i}'/0'`;

    const derivedSeedBuffer = derivePath(path, seed.toString("hex")).key;

    const derivedSeed = new Uint8Array(derivedSeedBuffer);

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const publicKey = Keypair.fromSecretKey(secret).publicKey.toBase58();

    const privateKey = Buffer.from(secret).toString("base64");

    return {
      data: {
        publicKey,
        privateKey,
      },
    };
  }
}

export { router as createhdMnemonic };
