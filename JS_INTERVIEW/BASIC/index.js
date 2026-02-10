// simple password checker

// let password="123456";
// let guesspass=prompt("Enter your password:");

// while(guesspass!==password){
   
//         alert('password not matched')
//          guesspass = prompt("Enter your password:");
   
// }
//   alert('congratulation password matched')


//   factorial of n 
let fact=1;

for(let i=1;i<=3;i++){
    fact=fact*i;

}
console.log(fact)

// pattern
for(let i = 1; i <= 5; i++) {
    let row = "";
    for(let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}