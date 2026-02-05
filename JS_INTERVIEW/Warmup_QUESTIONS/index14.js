// build a simple isPrime() function to check number is prime or not 

function isPrime(num){
      if(num<2) return false;
      for(let i=2;i<num;i++){
        // or i=2 i<Math.sqrt(num)
        if(num%i==0) return false;
      }
      return true;
}
console.log(isPrime(9)); 