var squares = document.querySelectorAll('.square')
var colorDisplay = document.querySelector('.color-display')
var message = document.querySelector('.message span')
var h1 = document.querySelector('h1')
var resetButton = document.querySelector('.btn-reset')

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

var colors = generateRandomColors(6)

function newWinningColor() {
  var random = Math.floor(Math.random() * colors.length)
  return colors[random]
}

var winningColor = newWinningColor()
colorDisplay.textContent = winningColor

resetButton.addEventListener('click', function () {
  colors = generateRandomColors(6)
  winningColor = newWinningColor()
  colorDisplay.textContent = winningColor

  for (var i = 0; i < squares.length; i += 1) {
    squares[i].style.backgroundColor = colors[i]
  }
  h1.style.background = '#343a45'
  resetButton.textContent = 'Reset'
})

for (var i = 0; i < squares.length; i += 1) {
  // add initial color to squares
  squares[i].style.backgroundColor = colors[i]

  // add click listener to squares
  squares[i].addEventListener('click', function () {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor

    if (clickedColor === winningColor) {
      message.textContent = 'Correct!'
      resetButton.textContent = 'Play Again?'
      changeColors(winningColor)
      h1.style.background = winningColor
    } else {
      this.style.backgroundColor = '#21252B' // for some reason clickedColor doesn't work here
      message.textContent = 'Try Again'
    }
  })
}
