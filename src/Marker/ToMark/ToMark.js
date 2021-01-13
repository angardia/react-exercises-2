import React from 'react'
import { useState } from 'react';

export default function ToMark(props) {
    const { words, doesInc } = props;
    const [repWord] = useState([...words]);

    return (

        <div>

            { doesInc === "" ? repWord.map((word, i) => {
                return <li key={i}>{word}</li>
            }) : words.map((word, i) => {
                if (word.includes(doesInc)) {
                    const newWord = word.replace(doesInc, `<span>${doesInc}</span>`);
                    return <li key={i} dangerouslySetInnerHTML={{ __html: newWord }} ></li>
                }
                else {
                    return <li key={i}>{word}</li>;
                }
            })}

        </div>
    )
}
