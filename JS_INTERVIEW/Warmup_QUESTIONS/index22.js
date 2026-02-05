// in an array of number and strings only add those numbers which are not strings

let array=[1,"hey",2,3,4,5,"hello","greet"];

const result = array.reduce((sum, item) => {
    if(typeof item === "number"){
        sum += item;
    }
    return sum;
}, 0);

console.log(result);
