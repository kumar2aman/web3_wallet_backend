import "dotenv/config";
import { Router } from "express";
import { loginSchema, signupSchema } from "../../types/schema";
import prisma from "../../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const authRouter: Router = Router();

authRouter.post("/signup", async (req, res) => {
  const { success, data } = signupSchema.safeParse(req.body);

console.log(data)

  if (!success) {
    return res.status(402);
  }

  if (!data) {
    return res.status(401);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  try {
    const response = await prisma.user.create({
      data: {
        username: data.username,
        password: hashedPassword,
      },
    });

    const userId = response.id;

    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string);

    res.status(200).json({
      data: "success",
      token: token,
    });
  } catch (error) {
    res.json({
      message: "user already exist with this username",
    });
  }
});

authRouter.post("/login", async (req, res) => {
  const { success, data } = loginSchema.safeParse(req.body);

  if (!success) {
    return res.status(402);
  }

  if (!data) {
    return res.status(401);
  }

  try {
    const response = await prisma.user.findUnique({
      where: {
        username: data.username,
      },
    });

    if (!response) {
      return res.status(401);
    }

    console.log(response);

    


    const isPasswordValid = await bcrypt.compare(
      data.password,
      response.password
    );
   
   

    if (!isPasswordValid) {
      return  res.status(401).json({
        message: "wrong password",
      });
    }

    const userId = response.id;

   

    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string);

     
    

    if(!token){
      return res.json({
        message: "cannot create token",
      });
    }
    


    res.status(200).json({
      data: "success",
      token: token,
    });
  } catch (error) {
    res.json({
      message: "wrong username or password",
    });
  }
});

export { authRouter };
