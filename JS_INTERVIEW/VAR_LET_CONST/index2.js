// let - block scope reinitallized but not redeclared

let b=9;
console.log(b);
b=10 ;
console.log(b);
// let b="ishi"  //refrence error
// console.log(b);

{
     let c=false;
    console.log(c);
    b="ishi"
    console.log(b)
}

console.log(c);
console.log(b);