import React, { useState } from 'react';
import './Marker.scss';
import ToMark from './ToMark/ToMark';

function Marker() {

	const [items] = useState([
		"First item",
		"Second special item",
		"Third item",
		"Fourth special item",
	]);
	const [textValue, setTextValue] =useState("");


	return (
		<div className="Marker">
			<p>
				Display a list of all items in the state.<br />
				If the value in the input can be found within the items - <span className="marker">marker</span> it.<br />
				Example: if the input value is "elf" then item "shelf" should look like: sh<span className="marker">elf</span>.
				Apply the marker for <u>all items</u>.
			</p>

			<input type="text" placeholder="Text to marker..." value={textValue} onChange={(e)=>setTextValue(e.target.value) } />
			<ul>
			
			 <ToMark words={items} doesInc={textValue} />
	
			</ul>
		</div>
	)
}

export default Marker;
