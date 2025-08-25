import { generateMnemonic } from "bip39";

 export default function createMnemonic():string {
  return generateMnemonic(128);
}



