const taxi = {
  make: 'Webville Motors',
  model: 'Taxi',
  year: 1955,
  color: 'yellow',
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  fuel: 0,
  start: function () {
    if (this.fuel === 0) {
      alert('The car is on empty, fill up before starting')
    } else {
      this.started = true;
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert('Zoom zoom')
        this.fuel = this.fuel - 1;
      } else {
        alert('Uh oh, out of fuel.');
        this.stop()
      }
    } else {
      alert('You need to start the engine first')
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }
}

taxi.start()
taxi.drive()
taxi.addFuel(2)
taxi.start()
taxi.drive()
taxi.drive()
taxi.drive()
taxi.stop()