let para=document.createElement('p')
para.innerText="mai tumshe pyaar nhi krta hu "
document.body.append(para)
para.style.backgroundColor="black"
para.style.color="green"
let btn = document.createElement('button');
btn.innerText = "Click me";

para.prepend(btn);   

let newclass=document.querySelector('.div2')

newclass.classList.add("newdiv");