import jwt from 'jsonwebtoken'
const gentoken= (userid)=>{
try{
   const token= jwt.sign({userid},process.env.JWT_SECRETKEY,{
    expiresIn:'1d'
   })
   return token
}
catch(err){
    console.log("token generation error",err)
}
}
export default gentoken