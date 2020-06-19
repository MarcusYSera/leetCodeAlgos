var kidsWithCandies = function (candies, extraCandies) {
  // newArr=[]
  // largest=0
  // for (var i = 0; i < candies.length; i++) {
  //   if(candies[i] >= largest){
  //     largest = candies[i];
  //   }
  //   // if(candies[i]+extraCandies >= )
  // }
  // for (var x = 0; x < candies.length; x++){
  //   if((candies[x]+extraCandies) >= largest){
  //     newArr.push(true);
  //   } else {
  //     newArr.push(false);
  //   }
  // }
  const max = Math.max(...candies);
  console.log(candies.map(x => x + extraCandies >= max));
};

kidsWithCandies([2, 3, 5, 1, 3], 3);
