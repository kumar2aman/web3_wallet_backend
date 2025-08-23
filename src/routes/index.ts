import {  Router } from "express";

import createMnemonic from "../api/v1/createMnemonic";
import createHDwallet from "../api/v1/createHDwallet"
import { authRouter } from "../api/v1/auth";

const router:Router = Router();


router.use("/wallet", createMnemonic)
router.use("/wallet", createHDwallet)
router.use("/signup", authRouter)


export default router

