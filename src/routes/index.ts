import { Router } from "express";
import createMnemonic from "../api/v1/createMnemonic";
import { authRouter } from "../api/v1/auth";
import accountRouter from "../api/v1/accounts";

const router: Router = Router();

router.use("/wallet", createMnemonic);
router.use("/accounts", accountRouter);
router.use("/auth", authRouter);

export default router;
