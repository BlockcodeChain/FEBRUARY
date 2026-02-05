// create an array of number and double each value using map

let array=[1,2,3,4,5,6,"hey"];
   const result= function doubleNum(array){
 return array.map((dnum)=>  typeof dnum==="number"?dnum*2:dnum)
}
console.log(result(array));