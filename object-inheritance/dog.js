function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this. weight = weight;
}

Dog.prototype.species = 'canine';
Dog.prototype.bark = function(){
  console.log('bark')
}
Dog.prototype.wag = function() {
  console.log('wag tail')
}
Dog.prototype.run = function() {
  console.log('run')
}


function ShowDog(name, breed, weight, handler) {
  Dog.call(this, name, breed, weight);
  this.handler = handler;
}


ShowDog.prototype = new Dog();

ShowDog.prototype.league = 'webville';
ShowDog.prototype.stack = function () {
  console.log('stack')
}
ShowDog.prototype.bait = function() {
  console.log('bait')
}
ShowDog.prototype.gait = function() {
  console.log('gait')
}
ShowDog.prototype.groom = function() {
  console.log('groom')
}
ShowDog.prototype.constructor = ShowDog;

const scottie = new ShowDog('Scottie', 'Scottish Terrier', 15, 'Cookie')

//test
scottie.stack()
scottie.bark()
console.log(scottie.league)
console.log(scottie.species)
console.log(scottie.constructor)