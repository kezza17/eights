import React from 'react';
import './DropZoneCards.css'


const Cards = ({id, src, rank, value, suit, x, y}) => {
	const coords = [{x:610, y:115}, {x:610, y:235}, {x:610, y:355}, {x:610, y:475}]
	const suitValue = (suit) => {
		if (suit === '♥️') {
			return 0
		} else if (suit === '♠️') {
			return 1
		} else if (suit === '♦️') {
			return 2
		} else if (suit === '♣️') {
			return 3
		}
	}
	return (
		<div style={{ height: 100, width: 80}}> 
		 { (value === 8) ? (
				 	<div 
				 		style={{position: 'absolute', left: `${coords[suitValue(suit)].x}px`, top: `${coords[suitValue(suit)].y}px`}}
						id = {id}
						className='eight'
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
						className='cardholder draggable tc bg-light-gray br3 grow bw1 shadow-3'
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