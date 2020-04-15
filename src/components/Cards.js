import React from 'react';
import './DropZoneCards.css'


const Cards = ({id, src, rank, value, suit, x, y}) => {
	const coords = [{x:610, y:66}, {x:610, y:186}, {x:610, y:306}, {x:610, y:426}]
	const suitValue = (suit) => {
		if (suit === 'H') {
			return 0
		} else if (suit === 'S') {
			return 1
		} else if (suit === 'D') {
			return 2
		} else if (suit === 'C') {
			return 3
		}
	}
	return (
		<div style={{ height: 100, width: 80}}> 
		 { (value === 8) ? (
				 	<div 
				 		style={{position: 'absolute', left: `${coords[suitValue(suit)].x}px`, top: `${coords[suitValue(suit)].y}px`}}
						id = {id}
						className='cardholder'
					>
						<img 
							alt='card' 
							id={id} 
							src={src} 
							rank={rank} 
							value={value} 
							suit={suit} 
							style={{ height: 100, width: 80}}
						/>
					</div>
		 		) : (
		 			<div 
						id = {id}
						className='draggable cardholder tc bg-light-gray br3 grow bw1 shadow-3'
					>
						<img 
							alt='card' 
							id={id} 
							src={src} 
							rank={rank} 
							value={value} 
							suit={suit} 
							style={{ height: 100, width: 80}}
						/>
					</div>
		 		)
	 		}
		</div>
	);
}

export default Cards;