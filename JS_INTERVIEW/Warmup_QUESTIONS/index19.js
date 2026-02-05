// diff between splice and slice  

let array=[1,2,3,4,5,6,7,8,9]

const result=array.slice(1,6)
const result2=array.slice(-6,-1)
console.log(result)
console.log(result2)
console.log(array)
const result1= array.splice(3,2,24);
console.log(result1)
console.log(array)
let a=[10,20,30,40,50];
console.log(a.splice(1,2,99,100));



// slice original array mai koi change nhi krta hai splice original array mai change kr deta hai
// 2. splice()
// array.splice(start, deleteCount, item1, item2...)
// start → kaha se start kare
// posotive leta hai 
// deleteCount → kitne delete kare

// baaki → jo naye items add karne ho
// Original array change karta hai

// Elements remove / add dono kar sakta

// Return karta hai removed elements
// ................................................

// 1. slice()
// positive negative dono leta ahi
// Original array change nahi karta
// slice string and array dono ke saath kaam kra hai lekin splice sirf array ke saath kaam krta hai 
// New array return karta

// Start index → inclusive

// End index → exclusive

// | Feature        | slice         | splice           |
// | -------------- | ------------- | -------------    |
// | Original array | ❌ change nahi | ✅ change hota |
// | Return         | new array     | removed items    |
// | Add items      | ❌             | ✅             |
// | End index      | exclusive     | count hota       |
