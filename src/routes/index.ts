import { Router } from "express";
import createMnemonic from "../api/v1/createMnemonic";
import { authRouter } from "../api/v1/auth";
import accountRouter from "../api/v1/accounts";
import { createhdMnemonic } from "../api/v1/createHDwallet";

const router: Router = Router();

router.use("/wallet", createMnemonic);
router.use("/wallet", createhdMnemonic);
router.use("/accounts", accountRouter);
router.use("/auth", authRouter);

export default router;
