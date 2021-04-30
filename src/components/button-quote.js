import React from 'react'
import '../app.css'

const ButtonQuote = ({ setValue }) => {
   
   return <button className="button" onClick={() => setValue() } > Next Quote </button>
}

export default ButtonQuote;
