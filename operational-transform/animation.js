'use strict'

const canvas = document.querySelector('.js-canvas')
const ctx = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
/*
const converged = '#00FF00'
const clientDiverge = '#FFFF00'
const serverDiverge = '#0000FF'
*/
const pointColor = '#000000'
const centerLine = Math.floor(canvas.width / 2)
const lineLen = 20

function Tree () {
  this.row = -1
}

Tree.prototype.draw = function draw (x, y) {
  ctx.strokeStyle = pointColor
  ctx.fillRect(x, y, 5, 5)
}

Tree.prototype.addChildren = function () {
  ++this.row
  console.log(`------- line ${this.row}`)

  const newY = lineLen * this.row
  if (newY >= canvas.height) {
    console.log(`newY is bigger than ${canvas.height}`)
    return false
  }

  if (this.row % 2 === 0) {
    this.draw(centerLine, newY)
  }

  for (let i = 0; i < this.row; i = i + 2) {
    const shift = lineLen * (i + 1)
    this.draw(centerLine - shift, newY)
    this.draw(centerLine + shift, newY)
  }
  return this
}

/*
function drawLine (start, end, color) {
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.lineWidth = 2
  ctx.stroke()
}
*/

function makePyramid (t) {
  if (t === false) {
    return
  }
  setTimeout(function () {
    makePyramid(t.addChildren())
  }, 50)
}

let p = new Tree()
makePyramid(p.addChildren())

