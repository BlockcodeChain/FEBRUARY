// create afunction that remove duplicates value form array 
let array=[1,3,98,1,3]

function remove(array){
    // let count=1;
    // for(let i =1;i<array.length;i++){
    //     array.sort((a,b)=>a-b);
    //     if(array[i]==array[i-1]){
    //        count++;
    //     }
    // }
     let set=new Set(array);
    return [...set]
}
function removeDup(arr){
  let result = [];

  for(let i=0; i<arr.length; i++){
    if(!result.includes(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(remove(array));
console.log(removeDup(array))


// let array = [1,3,98,1,3];

// function removeDup(arr){
//   let result = [];

//   for(let i = 0; i < arr.length; i++){
//     if(result.indexOf(arr[i]) === -1){
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(removeDup(array));
