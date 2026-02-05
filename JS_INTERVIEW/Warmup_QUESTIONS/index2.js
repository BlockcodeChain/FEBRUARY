// find combination of two arrays

function combine(array1,array2){
    // concat => array1.concat(array2)
    // spread operator => [...array1,...array2]
    // 
   return [...array1,...array2]
}
let mergedarray=combine([1,2,3,4],[12,5,6,7]);
console.log(mergedarray)

// sort the array in ascending order
console.log("Ascending Order")
mergedarray.sort((a,b)=>a-b);
console.log(mergedarray)

// sort the array in ascending order
console.log("Descending Order")
mergedarray.sort((a,b)=>b-a);
console.log(mergedarray)