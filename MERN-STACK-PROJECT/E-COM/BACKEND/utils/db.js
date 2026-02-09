import mongoose from 'mongoose'

const ConnectDB=async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
            console.log("DB CONNECTED ✅")
    }catch(err){
        console.log("error db: ",err)
        console.log("DB NOT CONNECTED ❌")
    }
}
export default ConnectDB