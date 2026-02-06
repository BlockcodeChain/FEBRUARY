// wajsf to accept a string as para and covert first letter of each word of the string in upper case
let str=["hello","hey","king","queen"]
function upperfirst(str){
let ans=str.map((item)=>{
    // or item[0]   or charAt(0)
   return item[0].toUpperCase() + item.slice(1);
})
return ans.join(' ');
// .join() kr degge toh string bnn jayegga 
}
console.log(upperfirst(str));