import express, { Router } from "express"
import cors from "cors"
import { router } from "./api/v1/createMnemonic"

const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))


app.use("/api/v1", router)
app.get("/",(req,res)=>{
    res.send("hello world")
})


app.listen(8080);