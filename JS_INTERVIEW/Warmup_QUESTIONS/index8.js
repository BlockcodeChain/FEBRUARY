// given an array of string return a new array where all string are in uppercase
let array=["hello","hey","hi","greetings"]

function uppercasestring(array){
return array.map((list)=>list.toUpperCase())
}
console.log(uppercasestring(array)) 