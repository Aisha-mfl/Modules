function climb(n) {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
}
console.log(climb(1));
console.log(climb(2));
console.log(climb(3));
console.log(climb(4));
console.log(climb(5));

//big-o O(n)

