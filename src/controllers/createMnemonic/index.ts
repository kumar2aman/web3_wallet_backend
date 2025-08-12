import { generateMnemonic } from "bip39";

export function createMnemonic():string {
  return generateMnemonic(128);
}
