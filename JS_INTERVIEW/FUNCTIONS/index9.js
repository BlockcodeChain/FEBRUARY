// explain immutability and how u would update an object in an array without mutating the original 

let array=[1,2,4,5,6]
const newarr=array.map((item)=>{
    return item*2;
})
console.log(newarr);
console.log(array);



// Immutability means data cannot be modified directly. Instead, we create a new updated version of it.