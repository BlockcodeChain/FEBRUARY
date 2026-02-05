// create a function that reverse each word of a give sentence eg main hu ishi -> ihsi uh niam

let sentence="mai hu ishi"

 //purra array mai convert kr degga 



let finalResult=sentence.split(' ').map(word=>{
    let reverseword=word.split('').reverse().join('')
   return (reverseword)
}).join(' ')
console.log(finalResult)