function makeCounter() {
  let count = 0;

  function counter() {
    count++;
    return count;
  }
  return counter;
}

const doCount = makeCounter();
console.log(doCount())
console.log(doCount())