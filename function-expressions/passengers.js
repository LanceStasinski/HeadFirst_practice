let passengers = [
  {name: 'Jane', paid: true, ticket: 'coach'},
  {name: 'Evel', paid: true, ticket: 'firstclass'},
  {name: 'Sue', paid: false, ticket: 'firstclass'},
  {name: 'John', paid: true, ticket: 'coach'}
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

function createDrinkOrder(passenger) {
  let orderFunction;

  if (passenger.ticket === 'firstclass') {
    orderFunction = function() {
      alert('Would you like a cocktail or wine?')
    }
  } else if (passenger.ticket === 'premium') {
    orderFunction = function() {
      alert('Would you like wine, cola or water?')
    }
  } else {
    orderFunction = function() {
      alert('Your choice is cola or water.')
    }
  }
  return orderFunction;
}

function getDinnerOrder(passenger) {
  let getDinnerOrderFunction;

  if (passenger.ticket === 'firstclass') {
    getDinnerOrderFunction = function() {
      alert('Would you like chicken or pasta?')
    }
  } else if (passenger.ticket === 'premium') {
    getDinnerOrderFunction = function() {
      alert('Would you like a snack box or cheese plate?')
    }
  } else {
    getDinnerOrderFunction = function() {
      alert('Your choice is peanuts or pretzels.')
    }
  }
  return getDinnerOrderFunction;
}


function serveCustomer(passenger) {
  const getDrinkOrderFunction = createDrinkOrder(passenger);
  const getDinnerOrderFunction = getDinnerOrder(passenger);
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  //show movie
  getDrinkOrderFunction();
  //pick up trash

}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i])
  }
}

servePassengers(passengers)