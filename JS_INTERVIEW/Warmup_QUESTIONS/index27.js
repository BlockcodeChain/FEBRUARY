// wa js function to get the first element of array passing a parameter n will return the first n element of array
let arr=[1,45,2,3,4,5,6,7,8,9,12]
function getfirstele(arr,n){
if(!n) return arr[0]
   else if(n>arr.length) {
        console.log("itna toh array mai element hi nhi hai ")
    }
    else{
        console.log(arr.slice(0,n))
    }
    return arr[0];
}
console.log(getfirstele(arr,10))