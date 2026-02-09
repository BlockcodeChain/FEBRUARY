import mongoose from 'mongoose'

const ProductSchema=mongoose.Schema({
   productname:{
    type:String,
    required:[true,"Please Enter Product Name "],
    trim:true
   },
   description:{
    type:String,
    required:[true,"Please Enter Product description "]
   
   },
    prize:{
    type:Number,
    required:[true,"Please Enter Product prize "],
   maxLength:[7,"Prize can't exceeds 7 digits"]
   },
    rating:{
    type:Number,
    default:0
   
   },
   images:[
    {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
             required:true
        }   
    }
   ],
   category:{
    type:String,
    required:[true,"Please Enter Product Category"]
   },
   stock:{
     type:Number,
    required:[true,"Please Enter Product Stock"],
    maxLength:[5,"Prize cannppt exceeds 5 digits"]
   },
   numberofreview:{
     type:Number,
    default:0
   },
   reviews:[
    {
        name:{
            type:String,
            required:true
        },
       rating:{
            type:Number,
            default:0
        },
        comment:{
            type:String,
            required:true
        },

    }
   ]
},{
    timestamps:true
})
const ProductModel=mongoose.model("Product",ProductSchema)
export default ProductModel