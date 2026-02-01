import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import approuter from './routes/user.routes.js';
import ConnectDB from './utils/db.js'
dotenv.config({
    path:"./.env",
})
const myport=process.env.PORT ||8000;
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth",approuter)

app.listen(myport ,()=>{
    ConnectDB();
    console.log(`Server is running on port ${myport}`);
})
