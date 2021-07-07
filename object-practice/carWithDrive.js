const taxi = {
  make: 'Webville Motors',
  model: 'Taxi',
  year: 1955,
  color: 'yellow',
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  start: () => {
    started = true;
  },
  stop: () => {
    started = false;
  },
  drive: () => {
    if (started) {
      alert('Zoom zoom')
    } else {
      alert('You need to start the engine first')
    }
  }
}

taxi.drive()
taxi.start()
taxi.drive()
taxi.stop()