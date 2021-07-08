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