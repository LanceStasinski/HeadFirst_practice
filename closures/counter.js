function makeCounter() {
  let count = 0;

  return {
    increment: function () {
      count ++;
      return count;
    }
  }
}

const doCount = makeCounter();
console.log(doCount.increment())
console.log(doCount.increment())