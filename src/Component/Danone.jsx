import React from 'react'
import './Danone.css'
import Button from './Button'

const Danone = () => {
  return (
    <div className='danone'>
      <div className="danone_Top">
        <Button name="←" className="arrow2"/>
        <Button name="→" className="arrow2"/>
        </div>
        <section className='danone_Cont'>
            <div className='danone_Left'>
                <img src="https://assets.asana.biz/m/37f23cc2d55080f/original/Danone_40px_quote.svg" 
                alt="Danone"
                className='danone_logo' />
              <article className='danone_Info'>
                <div className='danone_Comp'>
                    <p>Company Size</p>
                    <h4>Enterprise</h4>
                </div>
                <div className='danone_Indus'>
                    <p>Industry</p>
                    <h4>Food & hospitality</h4>
                </div>
              </article>
            </div>
            <article className='danone_Right'>
         <div className='danone_To'>
        <h3 className="danone_Quote">
         ❝ Asana makes everything shareable, which <br/> saves us time executing programs <br/> because it’s so much easier to replicate <br/> and learn from what others have done.
        </h3>

        <h4 className="danone_Name">Simon Levinson</h4>
        <span className="danone_Role">
          Global Digital Manufacturing Process Innovation Manager, Danone
        </span>
      </div>
      <Button  name="Read case study" className="case_btn"/>
            </article>
        </section>
    </div>
  )
}

export default Danone
