// CRF that returns the last element of an array
let array=[1,2,3,4,5]
// for(let i=0;i<array.length;i++){
//     // console.log(array.size()-1)
//     if(i===array.length-1){
//         console.log(array[i])
//     }
// }

// fuction call krke 

function lastprint(array){
    return array[array.length-1]
}
const lastElement=lastprint(array);
console.log(lastElement)
