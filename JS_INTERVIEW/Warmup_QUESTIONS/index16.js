// diff between parseInt and number
let num1="123456j.8944f"
let num2="65415.02656f"

console.log(parseInt(num1))
console.log(Number(num2))
// both typeof =>Number

console.log(parseInt("123.455px"))
console.log(Number("1234.25486px"))


// binary convert
console.log(parseInt("110",2))  //binary
console.log(parseInt("110"))  //decimal
console.log(parseInt("110",8))  //ocatal
console.log(parseInt("110",16))  //heaxadcimal

// ## 🔹 Difference: parseInt vs Number
// parseInt

// integer only

// left to right reading

// partial string allow

// radix support

// Number

// strict conversion

// decimal allow

// ek bhi galat character → NaN
// ### 1. `parseInt()`

// * String ko **integer me convert** karta hai.
// * Left se read karta hai jab tak valid number mile.
// * Decimal part ignore kar deta hai.
// * Agar starting me number nahi → `NaN`.

// ```js
// parseInt("42")        // 42
// parseInt("42.99")     // 42  (decimal ignore)
// parseInt("42abc")     // 42
// parseInt("abc42")     // NaN
// ```

// ---

// ### 2. `Number()`

// * Poore string ko strict tarike se number me convert karta hai.
// * Agar thoda bhi invalid character ho → `NaN`.

// ```js
// Number("42")      // 42
// Number("42.99")   // 42.99
// Number("42abc")   // NaN ❌
// Number("abc42")   // NaN ❌
// ```

// ---

// ## Main Differences Table

// | Feature         | parseInt | Number      |
// | --------------- | -------- | ----------- |
// | Decimal support | ❌ ignore | ✅ allow     |
// | Partial string  | ✅ allow  | ❌ not allow |
// | Strict          | ❌        | ✅           |
// | Radix support   | ✅        | ❌           |

// ---

// ## Important Example

// ```js
// parseInt("10.5")   // 10
// Number("10.5")     // 10.5
// ```

// 👉 Agar tumhe **sirf integer chahiye → parseInt**
// 👉 Proper number (decimal bhi) → **Number**

