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
    this.started = true;
  },
  stop: () => {
    this.started = false;
  },
  drive: () => {
    if (this.started) {
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