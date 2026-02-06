let shrink=document.querySelector('.shrink')
let expand=document.querySelector('.expand')
let box=document.querySelector('.box')
expand.addEventListener('click',()=>{
       box.style.transform="scale(1.3)";
})
shrink.addEventListener('click',()=>{
    box.style.transform="scale(0.7)";
})