// whhat is diff between foreach and map and when it is wrong to use map


// Use map() when you need a new transformed array.
// Use forEach() when you just want to iterate and perform side effects.
// map() follows functional programming principles and supports immutability by returning a new array. It should not be used for side effects because that violates its purpose.