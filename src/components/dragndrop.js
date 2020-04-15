import interact from 'interactjs'
import imageLoader from './images'

const images = imageLoader()

const dragMoveListener = (event) => {
	let target = event.target
	// keep dragged postion in data-x/data-y attributes
	let x = (parseFloat(target.getAttribute('data-x'))||0) + event.dx
	let y = (parseFloat(target.getAttribute('data-y'))||0) + event.dy
	// translate element
	target.style.webkitTranform = 
		target.style.transform = 
		`translate(${x}px,${y}px)`
	// update position attributes
	target.setAttribute('data-x', x)
	target.setAttribute('data-y', y)
}

const tableStart = [
	[null, null, null, null, null, null, 'H8', null, null, null, null, null, null],
	[null, null, null, null, null, null, 'S8', null, null, null, null, null, null],
	[null, null, null, null, null, null, 'D8', null, null, null, null, null, null],
	[null, null, null, null, null, null, 'C8', null, null, null, null, null, null]
]

let table = JSON.parse(JSON.stringify(tableStart))
let tableRev = (table => JSON.parse(JSON.stringify(table)))
let msg = ''
let message = `Alex, it's your turn`

const place = (imageId) => {
	if (imageId.length === 3) {
			return (imageId.slice(1,)) - 2
		} else {
			return (imageId[1]) - 2
		}
	}

const newTable = (index1, index2, imageId) => {
	table[index1][index2] = imageId
	tableRev = (table => JSON.parse(JSON.stringify(table)))
	return table
}	

const addCard = (index1, index2, imageId) => {
	return whoDrinks(index1, index2, imageId)
}

const firstNum = (index1) => {
	let first = 0;
	first = table[index1].findIndex(value => {
		return value !== null
	})
	return first
}

const lastNum = (index1) => {
	let last = 0
	last = (tableRev(table))[index1].reverse().findIndex(value => {
		return value !== null
	})
	return 12 - last
}

const numDrinks = (index1) => {
	let value = table[index1][lastNum(index1)]
	if (value.length === 3) {
		return ((value.slice(1,)) - (table[index1][firstNum(index1)][1]) + 1)
	} else {
		return ((value[1]) - (table[index1][firstNum(index1)][1]) + 1)
	}
}

const whoDrinks = (index1, index2, imageId) => {
	table = newTable(index1, index2, imageId)
	const findNull = table[index1].slice(firstNum(index1),(lastNum(index1))).some(value => {
		return value === null
	})
	if (findNull) {
		msg = `Drink ${numDrinks(index1)} times!`
		return msg
	} else {
		msg = `Hand out ${numDrinks(index1)} drinks!`
		return msg
	}
}

interact ('.draggable:not(.dropped)')
	.draggable({
		inertia: true,
		modifiers: [
			interact.modifiers.restrictRect({
				endOnly: true
			})
		],
		autoScroll: true,
		listeners: {
			move: dragMoveListener,
		}
	})

for (let i=0; i<52; i++) {
	let imageId = images[i].id
	const suit = (imageId) => {
		let x = 0
		if (imageId[0] === 'H') {
			x = 0
		} else if (imageId[0] === 'S') {
			x = 1
		} else if (imageId[0] === 'D') {
			x = 2
		} else if (imageId[0] === 'C') {
			x = 3
		}
		return x
	}

	interact('.dropzone' && `#${imageId}`)
	.dropzone({
		accept: `#${imageId}`,
		overlap: 0.95,

		//listen for drop related events:

		ondropactivate: function (event) {
			event.target.classList.add('drop-active')
			console.log('ondropactivate')
		},
		ondragenter: function (event) {
			let dropzoneElement = event.target
			let draggableElement = event.relatedTarget
			dropzoneElement.classList.add('drop-target')
			draggableElement.classList.add('can-drop')
			console.log('ondragenter')
		},
		ondragleave: function (event) {
			event.target.classList.remove('drop-target')
			event.relatedTarget.classList.remove('can-drop')
			console.log('ondragleave')
		},
		ondrop: function (event) {
			event.target.classList.add('dropped-in')
			// event.relatedTarget.classList.remove('draggable')
			event.relatedTarget.classList.add('dropped')
			let message = addCard(suit(imageId), place(imageId), imageId)
			document.querySelector('.message').textContent = message
			console.log('ondrop')
		},
		ondropdeactivate: function (event) {
			event.target.classList.remove('drop-active')
			event.target.classList.remove('drop-target')
			console.log('ondropactivate')
		}
})

}

export default (dragMoveListener, message)