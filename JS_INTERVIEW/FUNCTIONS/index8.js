// how do u use .reduce() to calculate the total prize in shopping Caret

let array=[1,5,2,9];
const newarr=array.reduce((acc,elem)=>{

   return acc+elem;
},0)
console.log(newarr)


// Hum newarr ko call nahi kar rahe, argument nahi bhej rahe, phir value kaise aa rahi hai?

// 🔥 Simple Answer

// Because:

// 👉 .reduce() khud function ko internally call karta hai
// 👉 Wo automatically acc aur elem pass karta hai

// Tumhe manually kuch call nahi karna padta.

// 👉 .map() khud har element ke liye function call karta hai.

// Internally ye kuch aisa karta hai:

// for each element:
//     callback(element)