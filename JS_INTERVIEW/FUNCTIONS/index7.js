// how would u use .map() to trnasform list of product intoo a list of html elements

const list  = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
]
const body=document.body
const display=document.createElement("div")
const newlist=list.map((item)=>{
    const p=document.createElement("p")
    p.textContent=item.name;
   
    return p;
})
newlist.forEach((el)=>{
    display.appendChild(el)
})
body.appendChild(display)
