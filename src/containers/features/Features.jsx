import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featuresData=[
  {
    title:"Improving end distrusts instantly",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum numquam nostrum officia consequuntur mollitia error nobis repellendus. Nulla, excepturi."
  },
  {
    title:"Become the trended active",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum numquam nostrum officia consequuntur mollitia error nobis repellendus. Nulla, excepturi."
  },
  {
    title:"Messanger or am nothing",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum numquam nostrum officia consequuntur mollitia error nobis repellendus. Nulla, excepturi."
  },
  {
    title:"Really boy law county",
    text:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum numquam nostrum officia consequuntur mollitia error nobis repellendus. Nulla, excepturi."
  },
]
const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize it.Step into Future Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {
          featuresData.map((item,index)=>(
            <Feature {...item}/>
          ))
        }

      </div>
    </div>
  )
}

export default Features
