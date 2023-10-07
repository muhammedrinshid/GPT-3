import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={"What is GPT-3"} text={"Lorem, ipsum dolor sit amet consectetur        Lorem ipsum dolor sit amet consectetur.adipisicing elit. Obcaecati unde inventore cumque aliquid excepturi, explicabo earum a eligendi, voluptates hic, magnam molestiae fuga. Maiores, architecto."} />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Explore The Library
        </p>

      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title={"Chatbots"} text={"Lorem, ipsum dolor sit amet consectetur  elit. Obcaecati unde inventore cumque  a , voluptates hic, magnam molestiae fuga. Maiores, architecto."} />
        <Feature title={"Knowledgebase"} text={"Lorem, ipsum dolor sit amet consectetur  earum a eligendi, voluptates hic, magnam molestiae fuga. Maiores, architecto."} />
        <Feature title={"Education"} text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit.  voluptates hic, magnam molestiae fuga. Maiores, architecto."} />
      </div>
    </div>
  )
}

export default WhatGPT3
