let passengers = [
  {name: 'Jane', paid: true},
  {name: 'Evel', paid: true},
  {name: 'Sue', paid: false},
  {name: 'John', paid: true}
]

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}