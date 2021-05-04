import React from 'react'
import '../App.css'

const ButtonQuote = ({ color, setValue }) => {

   return <button style={{background:''+color+''}} className="button" onClick={ () => setValue() } > Next Quote </button>
}

export default ButtonQuote;
