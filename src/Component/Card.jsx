import React from 'react'
import './Card.css'
import { data } from './dummyCards'
import Button from './Button'

const Card = () => {
  return (
        <section className='card'> 
      <div className="card_top">
        <Button name="←" className="arrow"/>
        <Button name="→" className="arrow"/>
        </div>
        <div className='card_container'>
             {data.map((item) => (
          <div className="card_item" key={item.id}>
            
            <div className="card_image">
              <img src={item.image} alt={item.title} />
            </div>

            <div className="card_content">
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
              <span className="card_link">{item.text} →</span>
            </div>

          </div>
        ))}
        </div>

      </section>
  )
}

export default Card
