var numberOfSquares = 6
var colors = []
var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('.color-display')
var message = document.querySelector('.message span')
var header = document.querySelector('header')
var resetButton = document.querySelector('.btn-reset')
var modeButtons = document.querySelectorAll('.btn-mode')

// change each color to match given color
function changeColors(color) {
  for (var i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = color
  }
}

function generateRandomColors(amount) {
  var arr = []
  for (var i = 0; i < amount; i += 1) {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    var color = 'rgb(' + r + ', ' + g + ', ' + b + ')'
    arr.push(color)
  }
  return arr
}

var colors = generateRandomColors(numberOfSquares)

function newWinningColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

var winningColor = newWinningColor()
colorDisplay.textContent = winningColor

function reset() {
  // generate new colors
  colors = generateRandomColors(numberOfSquares)

  // pick a new random color from array
  winningColor = newWinningColor()

  message.textContent = ''

  for (var i = 0; i < squares.length; i++) {
    // if there is a color
    if (colors[i]) {
      // unhide all blocks
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
      squares[i].style.backgroundColor = colors[i]
    }
  }
  header.style.background = '#343a45'
  resetButton.textContent = 'Reset'
}

resetButton.addEventListener('click', function () {
  reset()
})

function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      this.classList.add('selected')

      // // if button easy
      // if (this.textContent === 'Easy') numberOfSquares = 3
      // else numberOfSquares = 6
      // same in turnary
      this.textContent === 'Easy' ? numberOfSquares = 3 : numberOfSquares = 6
      reset()
    })
  }
}

function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    // add click listener to squares
    squares[i].addEventListener('click', function () {
      // grab color of clicked square
      var clickedColor = this.style.backgroundColor

      if (clickedColor === winningColor) {
        message.textContent = 'Correct!'
        resetButton.textContent = 'Play Again?'
        changeColors(winningColor)
        header.style.background = winningColor
      } else {
        this.style.backgroundColor = '#21252B' // for some reason clickedColor doesn't work here
        message.textContent = 'Try Again'
      }
    })
  }
}

function init() {
  setUpModeButtons()
  setUpSquares()
  reset()
}
init()
