// write a regular fn takes string and return it with first letter captalized

function Fcaptail(username){
return username.charAt(0).toUpperCase() +username.slice(1)
}
console.log(Fcaptail("ishi"));