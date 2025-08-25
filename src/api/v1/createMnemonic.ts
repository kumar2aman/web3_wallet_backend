import { Router } from "express";
import createMnemonic from "../../controllers/createMnemonic";





const router: Router = Router();

router.get("/createmnemonic",  (req, res) => {


 const mnemonic = createMnemonic(); // One consistent mnemonic

  const newMnemonic = mnemonic.split(" ");

  console.log("newMnemonic is from mnemonic", newMnemonic);
  res.json({
    data: newMnemonic,
  });
});

export default router 
