// how would u compoase multiple function to transform data step by step eg sanitize trim capitalize u are preparing user input before storing it 
let str='ishi';
let reversestring=str.split('').reverse().join('')
console.log(reversestring)


// Function composition means:

// 👉 Output of one function becomes input of next function.

const sanitize = (str) => str.replace(/[^a-zA-Z ]/g, '');

const trim = (str) => str.trim();

const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
let input = "  ishi@123  ";

let result = capitalize(trim(sanitize(input)));

console.log(result);


// Both compose and pipe are used to combine multiple functions into a single function. The only difference is execution order — compose runs functions from right to left, while pipe runs from left to right.


// Using compose
// const process = compose(addExclaim, toLower, trim);

// console.log(process("  ISHI  "));


// Flow:

// trim → toLower → addExclaim

// Using pipe
// const process = pipe(trim, toLower, addExclaim);

// console.log(process("  ISHI  "));


// Flow:

// trim → toLower → addExclaim


// Same result. Just different direction logic.

// 🧠 Simple Memory Trick

// compose = mathematical style (right → left)

// pipe = readable style (left → right)

// Most developers prefer pipe because it reads naturally.

// 🎤 Interview Answer

// Both compose and pipe are used to combine multiple functions into a single function. The only difference is execution order — compose runs functions from right to left, while pipe runs from left to right