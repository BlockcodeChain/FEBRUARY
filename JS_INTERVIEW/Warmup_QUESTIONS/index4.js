// create a function that contain both number ad string and return array contianing only string value
let array=[1,"hello",2,"hi",3,"hey",4,"greetings"]
// filter new array degga 
const result =array.filter((item)=>{
    if(typeof item==="string"){
        // console.log(item)   //array form mai nhi aa rha ahi 
       // return item
        // or
 return typeof item==="string"
    }
})
console.log(result)  //array form mai aayegga