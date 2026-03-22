import React from 'react'
import './Apart.css'
import Button from './Button'

const Apart = () => {
  return (
    <div className='apart'>
      <article className='apart_Asana'>
        <h1>What sets Asana apart</h1>
      </article>
      <section className='both_Cards'>
        <div className='amplify'>
            <h2>Amplify your impact <br/> with AI</h2>
            <p>Let Asana AI handle work for you—with the full context of your business—so your teams can achieve their goals faster.</p>
            <Button name="Meet AI Teammate" className="meet"/>
            <div className='card_image_inside'>
                <img src="https://assets.asana.biz/transform/9c192ab3-d6e7-483b-abed-b2e08ba2e6c0/homepage_ai_update?io=transform:fill,width:1440&format=webp" 
                alt="First Card Image" />
            </div>
        </div>
         <div className='clarity'>
          <h2>More clarity and accountability</h2>
          <p>
            Connect strategic goals to the teams that help achieve them. Keep your company on track with AI working alongside your teams.
          </p>
          <Button name="Learn about goals" className="learn"/>
          <div className='card_image_inside'>
            <img src="https://assets.asana.biz/transform/84bd82a5-8756-4b9b-a760-e790c5cbbc5b/WEB-homepage-goals-en_us?io=transform:fill,width:1440&format=webp" alt="Second Card Image" />
        </div>
        </div>
        
      </section>
    </div>
  )
}

export default Apart
