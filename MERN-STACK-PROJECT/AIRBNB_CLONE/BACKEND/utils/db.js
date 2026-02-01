import mongoose from 'mongoose'

const ConnectDB= async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("Database connected successfully ✅");
    }
    catch(err){
        console.error(err);
        console.log("Database connection failed")
    }
}
export default ConnectDB;