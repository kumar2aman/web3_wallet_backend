import {Keypair} from "@solana/web3.js"

import nacl from "tweetnacl"


const keyPair = Keypair.generate()

const publicKey = keyPair.publicKey.toBase58()
const privateKey = keyPair.secretKey


console.log("publickey is ", publicKey);
console.log("private key is ", privateKey)



const message = new TextEncoder().encode("hello cat");

const signture = nacl.sign.detached(message, privateKey)


const Decoded = nacl.sign.detached.verify( message, signture, keyPair.publicKey.toBytes())


console.log(Decoded)