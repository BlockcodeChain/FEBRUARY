// find max number in array
let array = [1,2,3,4,5,6,7,8,9,20];
function maxElement(array){
// return Math.max(...array);
let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i]
    }

}
return max;
}
const maxResult=maxElement(array);
console.log(maxResult);

function minElement(array){
// return Math.min(...array);
let min=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]<min){
        min=array[i]
    }

}
return min;
}

const minResult=minElement(array);
console.log(minResult);