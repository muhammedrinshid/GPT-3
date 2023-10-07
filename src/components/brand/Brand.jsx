import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import stack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={stack} alt="stack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      
    </div>
  )
}

export default Brand
