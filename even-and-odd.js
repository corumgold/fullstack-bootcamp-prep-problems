function evenAndOdd(arr){
    let evens = [];
    let odds = [];
    let evensAndOdds = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i]%2 === 0){
            evens.push(arr[i])
        } else {
            odds.push(arr[i]);
        }
    } evensAndOdds.push(evens, odds);
    return evensAndOdds;
  }