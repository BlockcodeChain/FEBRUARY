// write a js function that reverse a number 

let num=12345
let fnresult=function revnum(num){
 return Number(num.toString().split('').reverse().join(''))
}

console.log(fnresult(num))