// waf that checks if all elements in an array are numbers 
let array=[1,2,38,78]
function ischecknum(array){
    const result = array.filter((items)=> typeof items==="number")
    return result.length === array.length;
}
console.log(ischecknum(array))