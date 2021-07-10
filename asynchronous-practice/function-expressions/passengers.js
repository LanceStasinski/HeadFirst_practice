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

function checkNoFlyList(passenger) {
  return (passenger.name === 'Evel')
}

function checkNotPaid(passenger) {
  return (!passenger.paid)
}

var allCanFly = processPassengers(passengers, checkNoFlyList)

if (!allCanFly) {
  console.log("The plane can't take off: Passenger on no-fly list.")
}

var allPaid = processPassengers(passengers, checkNotPaid)

if (!allPaid) {
  console.log("The plane can't take off: Passengers haven't paid.")
}