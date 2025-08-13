import { Router } from "express";

import { mnemonic } from "../../controllers";

const router: Router = Router();

router.get("/createmnemonic", (req, res) => {
  const newMnemonic = mnemonic.split(" ");
  res.json({
    data: newMnemonic,
  });
});

export default router 
