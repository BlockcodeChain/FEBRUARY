let gparent =document.querySelector(".grandparents")
let parent =document.querySelector(".parents")
let child =document.querySelector(".child")

gparent.addEventListener('click',()=>{
    alert("grandparents is clicking")
},true)
parent.addEventListener('click',()=>{
    alert("parents is clicking")
},true)
child.addEventListener('click',()=>{
    alert("child is clicking")
},true)
gparent.addEventListener('click',()=>{
    alert("grandparents is clicking")
})
parent.addEventListener('click',()=>{
    alert("parents is clicking")
})
child.addEventListener('click',()=>{
    alert("child is clicking")
})