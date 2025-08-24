import { Router } from "express";

import createMnemonic from "../api/v1/createMnemonic";

import { authRouter } from "../api/v1/auth";

const router: Router = Router();

router.use("/wallet", createMnemonic);

router.use("/auth", authRouter);

export default router;
