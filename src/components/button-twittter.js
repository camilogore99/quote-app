import React from 'react'
import { FaTwitter } from 'react-icons/fa'

const ButtonTwittter = ({ color }) => {
   return (
      <div>
          <a style={{background:''+color+''}} className="icon-twi" href="https://twitter.com/compose/tweet" target="_blank ">< FaTwitter/></a>
      </div>
   )
}

export default ButtonTwittter;