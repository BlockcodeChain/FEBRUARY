// what is pure function and is it useful in Ui rendering 

// A pure function is a function that always returns the same output for the same input and does not cause any side effects.
// In UI libraries like React, components are ideally pure functions because UI is a function of state.
// Pure functions make rendering predictable, easier to debug, test, and optimize.


// Same inputs → same output

// No external changes

// No API call

// No DOM manipulation

// No state mutation

// Now important part — Is it useful in UI rendering?

// YES. Very useful.

//  In frameworks like React, UI is basically a function of state.
// eg.
// function Button({ text }) {
//   return <button>{text}</button>;
// }
// Same props → same UI.

// That is predictable rendering.

// 1️⃣ Predictable UI

// If state doesn’t change → UI doesn’t change.

// 2️⃣ Easy Debugging

// No hidden mutations. Easier to track bugs.

// 3️⃣ Performance Optimization

// React can use:

// React.memo

// useMemo

// useCallback

// These rely on pure behavior.

// 4️⃣ Easier Testing

// Just pass input → check output. Simple.