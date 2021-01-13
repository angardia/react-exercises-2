import React from 'react';
import { useState } from 'react';
import './RealNumber.scss';

function RealNumber() {
	const [show, setShow] = useState(true);
	const [value, setValue] = useState("");



	function inputTest(e) {
		setValue(e.target.value);
		const nums= "^[0-9]*$";

		if(e.target.value.match(nums)){
			setShow(true)
		}
		else{
			setShow(false)
		}
	}



	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={inputTest} value={value} />
			{ show && <button>Submit</button>}
		</div>
	)
}

export default RealNumber;
