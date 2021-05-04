import { useState }from 'react'
import { colorAlea } from '../color-alea' 
import quote from '../quotes.json'
import Quote from './quote'
import Autor from './autor'
import ButtonTwittter from './button-twittter'
import ButtonQuote from './button-quote'
import '../container.css'

const Container = () => {
   const [ quoteJson, setQuoteJson ] = useState(0)
   const [color, setColor] = useState(colorAlea())

   document.querySelector("body").style.backgroundColor = color

   const handleQuotes = () => {
      setQuoteJson( getRandomInt(1,100) )
      setColor(colorAlea)
   }
   const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
   }
   return (
      <div className="container-child">
         <div className="title" >
            <Quote quoteJson={ quote.quotes[ quoteJson ].quote } />
         </div>
         <div className="autor">
            <Autor quoteJson={ quote.quotes[ quoteJson ].author } />
         </div>
         <div className="container-buttons">
            <ButtonTwittter color={color} />
            <ButtonQuote color={color} setValue={ handleQuotes }/>
         </div>
      </div>
   )
};

export default Container;