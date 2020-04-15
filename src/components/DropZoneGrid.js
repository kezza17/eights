import React from 'react';

const DropZoneGrid = () => {
	let zone = [[],[],[],[]]
	const suits = ['♥️', '♠️', '♦️', '♣️'];
	for (let i=0; i<13; i++) {
		for (let j=0; j<suits.length; j++) {
			zone[j][i] = suits[j]+(i+2)
		}
	}
	return (
		<div className='dropgrid'>
			{
				zone[0].map(i => {
					return(
						<div 
							key={i}
							id={i}
							className='dropzone bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } dark-red'>
								{i.slice(1,)}

							</p>
							<p className='f2 serif { font-family: georgia } dark-red'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[1].map(i => {
					return(
						<div 
							key={i}
							className='dropzone bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } black'>
								{i.slice(1,)}

							</p>
							<p className='f2 serif { font-family: georgia } black'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[2].map(i => {
					return(
						<div 
							key={i}
							className='dropzone bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } dark-red'>
								{i.slice(1,)}

							</p>
							<p className='f2 serif { font-family: georgia } dark-red'>
								{i[0]}
							</p>
						</div>
					)
				})
			}
			{
				zone[3].map(i => {
					return(
						<div 
							key={i}
							className='dropzone bg-light-gray br3 pa2 o-50 ba bw2 b--gray'
							style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}} 
						>
							<p className='f3 serif { font-family: georgia } black'>
								{i.slice(1,)}

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