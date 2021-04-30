import { useState }from 'react'
import quote from '../quotes.json'
import '../container.css'
import Quote from './quote'
import Autor from './autor'
import ButtonTwittter from './button-twittter'
// import ButtonQuote from './button-quote'


const Container = () => {

   const [quoteJson, setQuoteJson] = useState(1)

   return (
      <div className="container-child">
         <div className="title" >
            <Quote quoteJson={ quote.quotes[quoteJson].quote } />
         </div>
         <div className="autor">
            <Autor quoteJson={ quote.quotes[quoteJson].author } />
         </div>
         <div className="container-buttons">
            <div>
               <ButtonTwittter />
            </div>
            <div>
               <button className="button" onClick={() => setQuoteJson( quoteJson + 1 )} > Next Quote </button>
               {/* <ButtonQuote setValue={ setQuoteJson }/> */}
            </div>
         </div>
      </div>
   )
}

export default Container;