import React from 'react'
import './possibility.css'
import PossibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'  id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={PossibilityImage} alt="" />
      </div>
      <div className='gpt3__possibility-container'>
        <h4>Request Eearly Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Yet bed or travel Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas deserunt, cumque cum dicta ea aliquid sit facilis libero fugiat odit corrupti unde reiciendis similique molestiae, facere mollitia.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
      
    </div>
  )
}

export default Possibility
