'use strict'

const canvas = document.querySelector('.js-canvas')
const ctx = canvas.getContext('2d')
canvas.width = 960
canvas.height = 700
const centerLine = Math.floor(canvas.width / 2)
const lineLen = 40
const nibSize = 5
const wait = 150
let paused = true
let step = false
const timeouts = []
const height = 13

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 71) {
    paused = !paused
  }

  if (evt.keyCode === 82) {
    step = false
    paused = true
    run()
  }

  if (evt.keyCode === 83) {
    step = !step
    paused = false
  }
})

function makeData () {
  const data = []
  for (let idx = 0; idx < height; idx++) {
    const y = idx * lineLen
    const points = []
    let adj = idx
    do {
      const x = centerLine + (lineLen * adj)
      points.push({x: x, y: y})
      adj = adj - 2
    } while (adj >= idx * -1)
    data.push(points)
  }
  return data
}

function drawLine (start, end, color) {
  ctx.strokeStyle = color
  ctx.beginPath()
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.lineWidth = nibSize
  ctx.stroke()
}

function drawPoint (pt, color) {
  ctx.fillStyle = color
  ctx.fillRect(pt.x, pt.y, nibSize - 2, nibSize - 2)
}

function makeChart (points, index) {
  if (points.length === 0) {
    return
  }

  const row = points.shift()
  const lines = []

  function nextRow () {
    const to = setTimeout(function () {
      makeChart(points, ++index)
    }, wait)
    timeouts.push(to)
  }

  function nextLine (lineIndex) {
    if (lineIndex === lines.length) {
      return nextRow()
    }

    if (paused) {
      const to = setTimeout(() => nextLine(lineIndex), wait)
      timeouts.push(to)
      return
    }

    drawLine(lines[lineIndex][0], lines[lineIndex][1], lines[lineIndex][2] || '#00FF00')

    if (step) {
      paused = true
      step = false
    }

    const to = setTimeout(() => nextLine(++lineIndex), wait)
    timeouts.push(to)
  }

  if (index === 0) {
    drawPoint(row[0], '#0000FF')
    return nextRow()
  } else {
    for (let i = 0, len = row.length; i < len; i++) {
      const end = data[index][i]
      if (i === 0) {
        const start = data[index - 1][0]
        lines.push([start, end])
      } else if (i + 1 === row.length) {
        const prev = data[index - 1]
        const start = prev[prev.length - 1]
        lines.push([start, end, '#4444FF'])
      } else {
        const start1 = data[index - 1][i - 1]
        const start2 = data[index - 1][i]
        lines.unshift([start1, end])
        lines.unshift([start2, end])
      }
    }
  }
  nextLine(0)
}

const data = makeData()

function run () {
  timeouts.forEach(to => clearTimeout(to))
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  makeChart(data.slice(0), 0)
}

run()
