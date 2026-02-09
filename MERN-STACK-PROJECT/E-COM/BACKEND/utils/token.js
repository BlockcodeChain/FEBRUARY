import jwt from 'jsonwebtoken'

const gentoken = ()=>{
    try{
        const tokens= jwt.sign({},process.env.JWT_SECRET,
            {expireIn:"1d"})
            return tokens;
    }
    catch(err){
       console.log("TOKEN PROBLEM :",err)
    }
}
export default gentoken