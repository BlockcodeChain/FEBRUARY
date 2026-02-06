// write a fucntion to get the number of occurence of each letter in specified string 
let str = "ishi";
function getoccurence(string){
  let obj = {}

  string.split('').forEach(letter => {

    if(obj.hasOwnProperty(letter)){
        obj[letter] = obj[letter] + 1;
    } else {
        obj[letter] = 1;
    }

  })

  console.log(obj)
}

getoccurence(str)
