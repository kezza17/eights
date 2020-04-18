import React from 'react';

const StartGame = ({ onRouteChange }) => {
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-100-m w-100-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure center">
			    <fieldset id="new_game" className="ba b--transparent ph0 mh0 ">
			      <legend className="f3 mb2 fw6 ph0 mh0">What would you like to be called?</legend>
			      <div className="mt3">
			        <input 
			        	className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-90 mb3 " 
			        	type="text" 
			        	name="name"  
			        	id="name"
		        	/>
				      <input 
				      	onClick={() => onRouteChange('lobby')}
				      	className="b br3 ph3 pa2 input-reset ba b--black bg-light-blue grow pointer f4 dib mb3" 
				      	type="submit" 
				      	value="Enter Game"
			      	/>
			      	<legend className="f5 dib mb0 fw6 ph0 mh0">Your game code is: "1234"</legend>
			      </div>
			    </fieldset>
			  </div>
			</main>
		</article>
	)
}

export default StartGame