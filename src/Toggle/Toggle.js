import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

function Toggle() {
	const [showLogo, setShowLogo] = useState(true);
	return (
		<div className="Toggle">
			<p>Make the logo show and disappear when clicking on the button.</p>
			<button onClick={()=> setShowLogo(!showLogo)}>Show / Hide</button>
			<div className="Toggle__logo-wrapper">
			{ showLogo && <img src={logo} alt="logo" />}
			</div>
		</div>
	)
}

export default Toggle;
