// create product
// get all product
// update product
// delete product 
// accesing single product 

import product from '../module/product.module.js'
// product
export const createProduct =async (req,res)=>{
try{
const {productname,description,prize,category,stock}=req.body
if(!productname ||!description ||!prize||!category||!stock){
    return res.status(400).json({message:"All fields are required"})
}
const newProduct=await product.create({
    productname,description,prize
})

 return res.status(201).json({
      message: "Product created",
      success: true,
      newProduct
    });
}
catch(err){
    console.log("product error",err)
return res.status(500).json({message:"product error",
    success:false
})
}
}

// get all product
export const getAllProduct =async ()=>{
try {

  const products = await product.find();
// product.find -> mtlb sarre products utha lo 
  res.status(200).json({
    success: true,
    count: products.length,
    products
  });

}
catch(err){
  res.status(500).json({
    message: "Error fetching products"
  });
}
}

// get single product
export const getSingleProduct = async (req, res) => {

try {

  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json({
    success: true,
    product
  });

}
catch(err){
  res.status(500).json({
    message: "Error fetching product"
  });
}

};
