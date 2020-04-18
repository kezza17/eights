import React from 'react'
import Popup from "reactjs-popup";

const Instructions = () => {
 	return(
 		<div style={{display: 'flex', justifyContent: 'space-between'}}>
	 		<div className='ph3 ml3 pt3 pb0'>
	 			<legend className="f2 pb2 fw4 ph0 mh0 dib dark-gray">Let's Play Eights</legend>
	 		</div>
	 		<div className='ph3 pt3 pb0'>
			  <Popup modal trigger={<button className='pointer f6 fw6 dim ph3 pv2 mb2 dib dark-gray bg-light-blue br2'> Instructions</button>} className='pa3'>
		    	<main className="pa4 center">
	    			<legend className="f3 pb2 fw6 ph0 mh0 dib">How to play eights:</legend>
				    <ol className="tl f5">
				      <li className='pb3'>The deck is evenly distributed between the players. The four 8's are excluded and placed on the table.</li>
				      <li className='pb3'>A player can choose any card from their hand and place it in the corresonding place on the table.</li>
				      <li className='pb3'>People start drinking! Who? It depends on these rules:
				      	<ul>
				      		<li className='pv3'> If the card played leaves no gaps in the row (whatsoever), you can give away as many drinks as there are cards in that row. You can split the number of drinks up between different people... or just target your friends.</li>
				      		<li> If the card played does leave a gap, you drink the number of cards in the row plus the number of gaps in between cards.</li>
				      	</ul>
				      </li>
				      <li className='pb3'>Press "Next Turn" to go to the next player.</li>
				      <li className='pb3'>You carry on until all the cards have been played.</li>
				    </ol>
					</main> 
			  </Popup>
		  </div>
	  </div>
	)
}

export default Instructions