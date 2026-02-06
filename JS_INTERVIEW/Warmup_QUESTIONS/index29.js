// wa js function program to find the most frequent item of an array

function mostFrequent(arr){

  let freq = {};
  let maxCount = 0;
  let mostItem;

  for(let item of arr){

    freq[item] = (freq[item] || 0) + 1;

    if(freq[item] > maxCount){
      maxCount = freq[item];
      mostItem = item;
    }
  }

  return mostItem;
}

console.log(mostFrequent([1,2,3,2,4,2,5,1]));
