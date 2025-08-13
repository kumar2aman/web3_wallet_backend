import { Express, Router } from "express";

import createMnemonic from "../api/v1/createMnemonic";
import createHDwallet from "../api/v1/createHDwallet"

const router:Router = Router();


router.use("/wallet", createMnemonic)
router.use("/wallet", createHDwallet)



export default router

