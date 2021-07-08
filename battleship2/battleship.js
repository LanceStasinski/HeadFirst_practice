const view = {
  displayMessage: function () {
    const messageArea = document.getElementById('messageArea')
    messageArea.innerHTML = msg;
  },
  displayHit: function (location) {
    const cell = document.getElementById(location)
    cell.setAttribute('class', 'hit')
  },
  displayMiss: function (location) {
    const cell = document.getElementById(location)
    cell.setAttribute('class', 'miss')
  }
}

const model = {
  boardSize: 7,
  numShips: 3,
  ships: [
    {locations: [], hits: []},
    {locations: [], hits: []},
    {locations: [], hits: []}
  ],
  shipsSunk: 0,
  shipLength: 3,
  fire: function (guess) {
    for (let i = 0; i < this.numShips; i++) {
      let ship = this.ships[i];
      let index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('HIT!');
        if (this.isSunk(ship)) {
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('You missed.');
    return false;
  },
  isSunk: function (ship) {
    for (let i = 0; i < this.shipLength; i++) {
      if (ship.hits[i] !== 'hit') {
        return false;
      }
    }
    return true;
  }
}

const controller = {
  guesses: 0,
  processGuess: function(guess) {
    const location = this.parseGuess(guess)
    if (location) {
      this.guesses++;
      let hit = model.fire(location);
      if (hit && model.shipsSunk === model.numShips) {
        view.displayMessage(`You sank all my battleships in ${this.guesses} guesses.`)
      }
    }
  },
  parseGuess: function (guess) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    if (guess === null || guess.length !== 2) {
      alert('Oops, please enter a letter and a number on the board.')
    } else {
      let firstChar = guess.charAt(0);
      let row = alphabet.indexOf(firstChar);
      let column = guess.charAt(1);

      if (isNaN(row) || isNaN(column)) {
        alert("Oops, that isn't on the board.")
      } else if (row < 0 || row >= model.boardSize ||
        column < 0 || column >= model.boardSize) {
          alert("Oops, that's off the board!")
      } else {
        return row + column;
      }
    }
    return null
  }
}