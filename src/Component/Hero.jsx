import React from 'react'
import './Hero.css'
import Button from './Button'

const Hero = () => {
  return (
    <div className='general'>
      <section className='super'>
        <h1>Supercharge your teams <br/> 
        with AI that gets work done</h1>
        <p>Give your teams AI that understands their work, keeps projects moving, and gets <br/> better the more your teams use it.</p>
      </section>
      <article className='super_Buttons'>
        <Button name="Get Started" className = "get_Btn"
                        style= {{
                         padding: "17px 32px",
            color: "white",
            border: "none",
            borderRadius: "25px",
            background: "black",
            fontWeight: "600",
            fontSize: "18px",
            cursor: "pointer"}}/>
             <Button name="Contact Sales" className = "contact_Btn"
                        style= {{
                         padding: "17px 38px",
            color: "black",
            border: "1px solid gray",
            borderRadius: "25px",
            background: "white",
            fontWeight: "500",
            fontSize: "18px",
            cursor: "pointer"}}/>
      </article>
    </div>
  )
}

export default Hero
