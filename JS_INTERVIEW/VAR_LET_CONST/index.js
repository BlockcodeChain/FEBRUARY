// var 
// var - functional redeclare and reintiallized 

var a=2;
console.log(a);
var a="ishi";  //global scope redeclared reintiallized
console.log(a);
{
 a=true;   //reinitaliized
console.log(a);
}

console.log(a);  //variable shadowing


