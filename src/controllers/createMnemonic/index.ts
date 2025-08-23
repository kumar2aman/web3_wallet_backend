import { generateMnemonic } from "bip39";

 function createMnemonic():string {
  return generateMnemonic(128);
}


export const mnemonic = createMnemonic(); // One consistent mnemonic