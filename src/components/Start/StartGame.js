import React from 'react';

const StartGame = ({ onRouteChange }) => {

	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-100-m w-100-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure center">
			    <fieldset id="new_game" className="ba b--transparent ph0 mh0 mb4">
			      <legend className="f3 fw6 ph0 mh0 mb2">Want to Start a Game?</legend>
			      <div className="mt3">
				      <input 
				      	onClick={() => onRouteChange('namepage')}
				      	className="b br3 ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f4 dib h3 w-80" 
				      	type="submit" 
				      	value="Start New Game"
			      	/>
			      </div>
			    </fieldset>
			    <hr />
			    <fieldset id="join_game" className="ba b--transparent ph0 mt4">
			    	<legend className="f3 fw6 ph0 mh0 mb3">Join A Friend's Game?</legend>
				    <div className="">
				    	<div className="mb3">
				    		<label className="dib mr2 fw6 lh-copy f4" htmlFor="password">Game Code:</label>
				        <input 
				        	className="b pa2 input-reset ba bg-transparent hover-bg-light-blue hover-black w-20" 
				        	type="text" 
				        	name="gamecode"  
				        	id="gamecode"
			        	/>
		        	</div>
				      <input 
				      	onClick={() => onRouteChange('namepage')}
				      	className="b br3 ph3 pa2 input-reset ba b--black bg-light-blue grow pointer f4 dib" 
				      	type="submit" 
				      	value="Join Game"
			      	/>
			    	</div>
		    	</fieldset>
			  </div>
			</main>
		</article>
	)
}

export default StartGame