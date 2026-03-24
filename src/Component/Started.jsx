import React from 'react'
import './Started.css'
import Button from './Button'

const Started = () => {
  return (
    <div className='started'>
      <section className='both_Started'>
        <div className='easily'>
            <h1>Get started easily</h1>
            <p>Tour the platform, read a few deep dives, or kickstart <br/> your work management journey with the right <br/> template.</p>
        </div>
        <article className='easily_Right'>
            <div className='asana_Demo'>
                <div className='demo_Text'>
                <h2>Try the Asana demo</h2>
                <p>See Asana in action</p>
                </div>
                <div className='demo_Arrow'>
                    <Button name="→" className="arrow3"/>
                </div>
            </div>
            <div className='discover'>
                <div className='discover_Text'>
                    <h2>Discover resources</h2>
                    <p>Help artcles and tutorials</p>
                </div>
                <div className='discover_Arrow'>
                    <Button name="→" className="arrow3"/>
                </div>
            </div>
            <div className='temp'>
                <div className='temp_Text'>
                    <h2>Start with a template</h2>
                    <p>Get started faster with a template</p>
                </div>
                <div className='temp_Arrow'>
                    <Button name="→" className="arrow3"/>
                </div>
            </div>
        </article>
      </section>
    </div>
  )
}

export default Started
