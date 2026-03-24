import React from 'react'
import './Worlds.css'
import Button from './Button'

const Worlds = () => {
  return (
    <div className='world'>
      <section className='asana_World'>
        <h1>The world’s top companies trust <br/> Asana</h1>
         <Button name="See all case studies" className="study"/>
      </section>
    </div>
  )
}

export default Worlds
