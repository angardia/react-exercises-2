import React from 'react'

export default function Colorize(props) {

    return (
        <div>
           <p style={{color: props.colorName}}>{props.colorName}</p> 
        </div>
    )
}
