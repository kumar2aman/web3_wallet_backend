
import { generateMnemonic } from 'bip39';
import { Router } from 'express';


const router:Router = Router()



router.get("/createmnemonic",  (req, res)=>{

const mnemonic =  generateMnemonic(128)

console.log(mnemonic)

res.json({
    data: mnemonic
})

})


export {router}
