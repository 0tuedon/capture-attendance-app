/* eslint-disable react/prop-types */
import React from 'react'

const Button1 = (props) => {
  return (
        <button onClick={props.onClick} className={`${props.class} bg-green-500 hover:bg-green-700 text-white font-bold py-5 px-4 rounded`}>
            {props.text}
        </button>
  )
}

export default Button1
