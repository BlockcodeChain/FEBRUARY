// in an array of number and strings only add those numbers which are not strings

let array=[1,"hey",2,3,4,5,"hello","greet"];

// const result = array.reduce((sum, item) => {
//     if(typeof item === "number"){
//         sum += item;
//     }
//     return sum;
// }, 0);
// console.log(result);
let sum=0;
// array.forEach(item=>{
//     if(typeof item==="number"){
//         sum+=item;
//     }
    
// })
// console.log(sum);


// Method	Use kab kare
// map	jab har element ko change karke naya array banana ho
// filter	jab kuch elements choose karne ho
// reduce	jab single value chahiye (sum, max, etc)
// forEach	simple loop ke liye