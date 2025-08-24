import { Router } from "express";
import { mnemonic } from "../../controllers/createMnemonic";




const router: Router = Router();

router.get("/createmnemonic", async (req, res) => {

  const newMnemonic = await mnemonic.split(" ");

  console.log("newMnemonic", newMnemonic);
  // res.json({
  //   data: newMnemonic,
  // });
});

export default router 
