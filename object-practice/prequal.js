const taxi = {
  make: 'Webville Motors',
  model: 'Taxi',
  year: 1955,
  color: 'yellow',
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false
}



const prequal = (car) => {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

let worthALook = prequal(taxi)

if (worthALook) {
  console.log(`You gotta check out this ${car.make} ${car.model}`)
} else {
  console.log(`You should really pass on the ${car.make} ${car.model}`)
}