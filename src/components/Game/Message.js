import React from 'react'
import message from './dragndrop'
import './DropZoneCards.css'

const Message = () => {
	let message1 = () => { document.querySelector('.message').textContent = `Alex, it's your turn`}
	let hide = () => {document.querySelector('.nextturn').classList.add('hide')};
	let drag = () => {
		let cardholderArray = document.querySelectorAll('.cardholder')
		for (let i=0;i<cardholderArray.length;i++) {
			cardholderArray[i].classList.add('draggable')
		}
		return cardholderArray
	}
	return (
		<div className='flex'>
			<div style={{height: 40}} className='center'>
				<h1 className='message f3 f3-m f3-l fw2 black-90 mb1'>{message}</h1>
			</div>	
			<div className='end pr5 nextturn hide'>
				<p 
					onClick={() => (message1(), hide(), drag())}
					className='pointer f6 fw6 dim pv1 mt2 mb2 dib dark-gray bg-transparent br-pill'
				>
					Next Turn 🠚
				</p>
			</div>
		</div>
	)
}

export default Message
