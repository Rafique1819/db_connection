import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/database.js";

const app = express();
dotenv.config();
dbConnection();
 const PORT =  process.env.PORT || 2000;

 app.listen(PORT,()=>{
    console.log(`server listem at port ${PORT}`);
    
 })

