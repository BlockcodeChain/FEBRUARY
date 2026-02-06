// waf that returns passed string with letters in alphabetical orders 
let sentence =['g','b','e','d','i'].sort()
console.log(sentence)


// string mai sort easy but number mai sort is diff


function sortString(str) {
  return (str.split(' ').sort().join(' '));
}

console.log(sortString("i am samridhi"));
