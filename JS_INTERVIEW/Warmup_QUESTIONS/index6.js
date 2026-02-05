// waf retrun length of given objects (number of keys)
let obj={
    name:"sachin",
    age:30,
    city:"pune"
}
const result = function objectlength(object){
    return Object.keys(object).length
}
console.log(result(obj))
console.log(Object.keys(obj))
console.log(Object.keys(obj).length)