import { Router } from "express";
import { mnemonic } from "../../controllers/createMnemonic";
import { middleware } from "../../middleware";



const router: Router = Router();

router.get("/createmnemonic",middleware  , (req, res) => {
  const newMnemonic = mnemonic.split(" ");
  res.json({
    data: newMnemonic,
  });
});

export default router 
