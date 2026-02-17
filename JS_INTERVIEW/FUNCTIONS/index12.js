// how do u implement your own version of map function on array

function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }

  return result;
}


// Create empty array

// Loop through original array

// Call callback for each item

// Push returned value into new array

// Return new array