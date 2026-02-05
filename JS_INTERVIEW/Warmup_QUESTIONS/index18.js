// explain floating point precision issue in js 

let sum =0.1+0.2;
console.log(sum);
// handle 

console.log(typeof Number(sum.toFixed(2)))  //string mai convert ho gya hai 
console.log(typeof sum)
console.log(sum.toFixed(1))