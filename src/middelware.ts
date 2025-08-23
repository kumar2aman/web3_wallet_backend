import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const middleware = (req:Request, res:Response, next:NextFunction) => {
    
 const token = req.headers.authorization?.split('')[1];

 if(!token || token === "null") {

    return res.status(401).json({
        message:"Unauthorized"
    })}


    try {

          const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.userId = (decoded as unknown as JwtPayload ).userId as string;
    next();
        
    } catch (error) {
        res.status(401).json({message:"Unauthorized"})
    }
  

}