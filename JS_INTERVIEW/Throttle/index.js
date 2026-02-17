
// function throttle(fn,d){
//     let timer=null;
//     return function(...args){
//         if(timer===null)  fn.apply(this,args)
//       timer=setTimeout(()=>{
//       timer=null;
//   },d)
//     }

// }
// const handleInput=()=>{
//     console.log("running ")
// }
// const optimal=throttle(handleInput,1000)



// function throttle(fn, delay) {
//     let lastCall = 0;

//     return function (...args) {
//         const now = Date.now();

//         if (now - lastCall >= delay) {
//             lastCall = now;
//             fn.apply(this, args);
//         }
//     };
// }


// window.addEventListener('scroll',  ()=> {
//     console.log("scrolling....");
// });


function throttle(fn,d){
    let timer=0;
   return function(...args){
    const newdate=Date.now();
    if(newdate-timer>=d){
        timer=newdate
        fn.apply(this,args)
    }
   }
}
const scroll=()=>{
    console.log("scroll running")
}

const scrolloptimal=window.addEventListener('scroll', throttle(scroll,1000));