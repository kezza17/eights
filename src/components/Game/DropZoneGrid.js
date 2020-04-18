import React from 'react';

const DropZoneGrid = () => {
	let zone = [[],[],[],[]]
	const suits = ['♥️', '♠️', '♦️', '♣️'];
	for (let i=0; i<13; i++) {
		for (let j=0; j<suits.length; j++) {
			zone[j][i] = suits[j]+(i+2)
		}
	}
	let face = [[],[],[],[]]
	const faceCards = ['J', 'Q', 'K', 'A']
	for (let i=0; i<13; i++) {
		for (let j=0; j<suits.length; j++) {
			if (i<9) {
				face[j][i] = suits[j]+(i+2)
			} else {
				face[j][i] = suits[j]+faceCards[i-9]
			}
		}
	}

	return (
		<div className='dropgrid'>
			{
				zone[0].map((i,k) => {
					return(
						<div 
							key={i}
							id={i}
							className='dropzone grid bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } dark-red'>
								{face[0][k].slice(2,)}

							</p>
							<p className='f2 serif { font-family: georgia } dark-red'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[1].map((i,k) => {
					return(
						<div 
							key={i}
							id={i}
							className='dropzone grid bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } black'>
								{face[1][k].slice(2,)}

							</p>
							<p className='f2 serif { font-family: georgia } black'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[2].map((i,k) => {
					return(
						<div 
							key={i}
							id={i}
							className='dropzone grid bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } dark-red'>
								{face[2][k].slice(2,)}

							</p>
							<p className='f2 serif { font-family: georgia } dark-red'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[3].map((i,k) => {
					return(
						<div 
							key={i}
							id={i}
							className='dropzone grid bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } black'>
								{face[3][k].slice(2,)}

							</p>
							<p className='f2 serif { font-family: georgia } black'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
		</div>
	);
}

export default DropZoneGrid;