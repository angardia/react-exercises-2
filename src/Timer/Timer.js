import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Timer.scss';

function Timer() {

	const [timer , setTimer] = useState(0);

	useEffect(()=>{
		const timer = setInterval(()=>{
			setTimer((timer => timer + 1))
		},1000);
		return ()=>{
            clearInterval(timer);
        }
	},[])


	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
			<div className="Timer__value">{timer}</div>
		</div>
	)
}

export default Timer;
