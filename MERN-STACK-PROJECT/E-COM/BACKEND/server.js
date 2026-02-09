import express from 'express'
import dotenv from 'dotenv'
import authRouter from './routes/user.route.js'
import ConnectDB from './utils/db.js'
dotenv.config({
    path:"./.env"
})
const app=express();
const myport=process.env.PORT ||3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth',authRouter)
app.listen(myport,()=>{
    ConnectDB()
    console.log(`Server running at port ${myport}`)
})