// fat fn that takes prize and  discount and return prize after discount 

const discount=(prize,dis)=>{
    return prize-prize*(dis/100);
}
console.log(discount(1000,20));