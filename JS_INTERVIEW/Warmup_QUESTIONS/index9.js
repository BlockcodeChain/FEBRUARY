// check if an object is empty (has no keys)

let obj={}
function checkobj(obj){
    return Object.keys(obj).length===0;
}
console.log(checkobj(obj));