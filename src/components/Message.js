import React from 'react'
import message from './dragndrop'
import './DropZoneCards.css'

const Message = () => {
	return (
		<div style={{height: 40}}>
			<h1 className='message f3 f3-m f3-l fw2 black-90 mv3'>{message}</h1>
		</div>	
	)
}

export default Message
