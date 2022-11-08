const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 600
canvas.height = 600
let x = 0;
let y = 0;

const tableArr = []
class Rect {
	constructor(x, y, width, height) {
		this.width = width
		this.height = height
		this.x = x
		this.y = y
	}
	draw(color) {
		ctx.fillStyle = color
		ctx.rect(this.x, this.y, this.width / 8, this.height / 8)
		ctx.fill()
		ctx.stroke()
	}
}
function newRect() {

	for (let i = 0; i < 64; i++) {
		tableArr.push(new Rect(x, y, canvas.width, canvas.height))
		if (x >= canvas.width - canvas.width / 8) {
			y += canvas.height / 8;
			x = 0
		} else {
			x = x + canvas.width / 8
		}
	}
}
newRect()
function init() {
	for (let i = 0; i < 64; i++) {
		const white = 'white';
		const brown = 'brown'
		tableArr[i].draw(brown)

	}

}
init()
function draw() {
	for (let x = 0; x < 8; x++) {
		for (let y = 0; y < 8; y++) {
			if (x % 2 == y % 2) {
				ctx.fillStyle = 'brown'
				ctx.fillRect(x * 75, y * 75, 75, 75)
			} else {
				ctx.fillStyle = 'white'
				ctx.fillRect(x * 75, y * 75, 75, 75)
			}
		}
	}
}
canvas.addEventListener('click', canvasClick)
function canvasClick(e) {
	tableArr.forEach(function (cell) {

		if (e.offsetX > cell.x &&
			e.offsetX < cell.x + canvas.width / 8 &&
			e.offsetY > cell.y &&
			e.offsetY < cell.y + canvas.height / 8) {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			draw()
			ctx.fillStyle = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`
			ctx.fillRect(cell.x - 75, cell.y - 150, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x - 75, cell.y + 150, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x + 75, cell.y + 150, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x + 75, cell.y - 150, canvas.width / 8, canvas.height / 8)

			ctx.fillRect(cell.x - 150, cell.y - 75, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x - 150, cell.y + 75, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x + 150, cell.y + 75, canvas.width / 8, canvas.height / 8)
			ctx.fillRect(cell.x + 150, cell.y - 75, canvas.width / 8, canvas.height / 8)
		}
	})
}

draw()
