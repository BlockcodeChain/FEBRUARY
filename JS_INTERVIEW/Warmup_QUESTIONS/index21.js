// how would u handle high precision decial math in js 




// ### Problem Example

// ```js
// 0.1 + 0.2
// ```

// Output:

// ```
// 0.30000000000000004   ❌
// ```

// Isliye financial / scientific calculations me dikkat aati hai.

// ---

// # ✅ Ways to Handle High Precision

// ## 1️⃣ Use toFixed (simple cases)

// ```js
// let ans = (0.1 + 0.2).toFixed(2);
// console.log(ans);   // "0.30"
// ```

// 👉 Par yeh string deta hai → perfect solution nahi.

// ---

// ## 2️⃣ Multiply Trick (Best basic way)

// ```js
// let a = 0.1;
// let b = 0.2;

// let result = (a*10 + b*10) / 10;
// console.log(result);   // 0.3
// ```

// 👉 Decimal hata ke integer math karo.

// ---

// ## 3️⃣ Use BigInt (for integers only)

// ```js
// let x = 12345678901234567890n;
// let y = 98765432109876543210n;

// console.log(x + y);
// ```

// 👉 BigInt decimals support nahi karta, sirf large integers.

// ---

// ## 4️⃣ Use Libraries (Real Industry Method) 🔥

// ### a) decimal.js

// ```js
// 0.1 + 0.2  → wrong
// new Decimal(0.1).plus(0.2) → 0.3  ✔
// ```

// ### b) big.js

// ### c) bignumber.js

// 👉 Finance apps me yahi use hota hai.

// ---

// # Interview Answer Short

// > JavaScript uses floating point, so for high precision 