import React from 'react'
import './Start.css'

const Lobby = ({ onRouteChange }) => {
	return (
		<article style={{width: 350}} className="br3 ba b--black-10 mv4 mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure center">
			    <fieldset id="new_game" className="ba b--transparent ph0 mh0 ">
			      <legend className="f3 mb2 fw6 ph0 mh0">Please wait for all your friends to join</legend>
			      <div className="mt3">
							<div className="ph2">
							  <ul className="list pl0 measure left tl">
							    <li className="lh-copy pl2 pb2 pt0 ba bl-0 bt-0 br-0 b--dotted b--black-30">Kelly</li>
							    <li className="lh-copy pl2 pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30">Alex</li>
							    <li className="lh-copy pl2 pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30">James</li>
							    <li className="lh-copy pl2 pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30">Buren</li>
							  </ul>
							</div>
			        <legend className="f4 dib mb3 fw6 pt2 ph0 mh0">Everyone here?</legend>
				      <input 
				      	onClick={() => onRouteChange('game')}
				      	className="b br3 ph3 pa2 input-reset ba b--black bg-light-blue grow pointer f4 dib mb4" 
				      	type="submit" 
				      	value="Start Game"
			      	/>
			      	<legend className="f5 dib mb0 fw6 ph0 mh0">Your game code is: "1234"</legend>
			      </div>
			    </fieldset>
			  </div>
			</main>
		</article>
	)
}

export default Lobby