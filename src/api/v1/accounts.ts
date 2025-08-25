import { response, Router } from "express";
import { middleware } from "../../middleware";
import { accountSchema } from "../../types/schema";
import prisma from "../../db";
import { main } from "./createHDwallet";

const accountRouter: Router = Router();

accountRouter.post("/createaccount", middleware, async (req, res) => {
  const { success, data } = accountSchema.safeParse(req.body);

  if (!success) {
    return res.status(402);
  }

  if (!data) {
    return res.status(401);
  }
try {


    const response = await prisma.account.create({
    data: {
      account: data.account || "A1",
      userid: req.userId,
    },
  });

  if (!response) {
    return res.status(401);
  }

  const accountId = response.id;

//   const keypair = main();

//   if (!keypair) {
//     return res.status(401);
//   }

//   const keypairResponse = await prisma.keypair.create({
//     data: {
//       publickey: keypair.data.publicKey,
//       privatekey: keypair.data.privateKey,
//       accountid: accountId,
//     },
//   });
    
} catch (error) {
    res.json({
        message: "something went wrong", error
    })
 }
  

});


export default accountRouter;