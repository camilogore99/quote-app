import React from 'react'
import '../app.css'

const ButtonQuote = ({ color, setValue }) => {

   return <button style={{background:''+color+''}} className="button" onClick={ () => setValue() } > Next Quote </button>
}

export default ButtonQuote;
