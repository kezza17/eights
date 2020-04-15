import React from 'react';
import Cards from './Cards'

const CardList = ({ images, position, players }) => {

	let deck = JSON.parse(JSON.stringify(images))
	let eights = []

	deck = deck.map((value, i) => {
		if (!deck[i].id.includes(8)) {
			return value
		} else {
			eights.push(value)
			return null
		}
	})

	function filterNull(el) {
		return el !== null
	}

	deck = deck.filter(filterNull)

	const cardsInHand = Math.floor((deck.length)/players)
	let randomNum = 0
	let hand = []

	for (let i=0; i<cardsInHand; i++) {
		randomNum = Math.floor(Math.random() * deck.length);
		hand.push(deck[randomNum])
		deck[randomNum] = null
		deck = deck.filter(filterNull)
	}

	return (
		<div>
			<div style={{display: 'flex'}}>
				{
					hand.map((card1, i)=> {
						return (
							<Cards 
								key={i}
								id={hand[i].id}
								src={hand[i].src}
								rank={hand[i].rank}
								value={hand[i].value}
								suit={hand[i].suit}
								x={position[i].x2}
								y={position[i].y2}
							/>
						);
					})
				}
			</div>
			<div style={{display: 'flex'}}>
				{
					eights.map((card2, i)=> {
						return (
							<Cards 
								key={i}
								id={eights[i].id}
								src={eights[i].src}
								rank={eights[i].rank}
								value={eights[i].value}
								suit={eights[i].suit}
								x={position[i].x2}
								y={position[i].y2}
							/>
						);
					})
				}
			</div>
		</div>
	);
}

export default CardList;