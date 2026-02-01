// what will be logged to console
// Global variable
let count = 0;

// IIFE → Immediately Invoked Function Expression
(function printcount() {

    // Here 'count' refers to GLOBAL count (0)
    if (count === 0) {

        // This creates a NEW block-scoped variable
        // It does NOT change the global count
        let count = 1;   //shadowing

        // Prints the BLOCK count → 1
        console.log(count);
    }

    // Outside the if block,
    // the block 'count' is gone
    // so this refers to GLOBAL count → 0
    console.log(count);

})();   // () → function is called immediately

// Final Output:
// 1
// 0
