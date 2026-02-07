let btn = document.createElement('button');
btn.innerText = "dark theme";

let body = document.body;

btn.style.backgroundColor = "black";
btn.style.color = "white";

body.append(btn);

// btn.addEventListener("click", () => {

//   if(body.style.backgroundColor === "black"){

//     body.style.backgroundColor = "white";
//     btn.innerText = "dark theme";
//     btn.style.backgroundColor = "black";
//     btn.style.color = "white";

//   } else {

//     body.style.backgroundColor = "black";
//     btn.innerText = "light theme";
//     btn.style.backgroundColor = "white";
//     btn.style.color = "black";

//   }

// });
// btn.addEventListener("click", () => {

//   if(body.className === "dark"){
//       body.className = "light";
//       btn.innerText = "dark theme";
//   } else {
//       body.className = "dark";
//       btn.innerText = "light theme";
//   }

// });

btn.addEventListener("click", () => {
   body.classList.toggle("dark");
    if(body.classList.contains("dark")){
       btn.innerText = "light theme";
   } else {
       btn.innerText = "dark theme";
   }
});
