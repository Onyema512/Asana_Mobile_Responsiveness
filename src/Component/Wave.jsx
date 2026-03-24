import React from 'react'
import './Wave.css'
import { waves } from './dummyWave'

const Wave = () => {
  return (
    <div className='wave'>
      <section className='wave_Container'>
        {waves.map((item) => (
            <div className='wave_Item' key={item.id}>
                <div className='wave_Image'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='wave_Content'>
                    <h3>{item.title}</h3>
                    <span className='wave_Link'>{item.text} →</span>
                </div>
            </div>
        ))}
      </section>
    </div>
  )
}

export default Wave
