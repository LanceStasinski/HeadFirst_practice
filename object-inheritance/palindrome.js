String.prototype.palindrome = function () {
  const splitString = this.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');

  return(this == joinArray)
}

const str = 'racecar';
console.log(str.palindrome())