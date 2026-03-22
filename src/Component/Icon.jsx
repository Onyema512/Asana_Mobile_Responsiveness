import React from 'react'
import './Icon.css'
import { firstLogo } from './dummyIcon'
import { secondLogo } from './dummyIcon'

const Icon = () => {
  return (
    <div className='icon_Cont'>
        <section className='top_Icon'>
  {firstLogo.map((item) => (
    <div className="icon_item" key={item.id}>
      <img src={item.image} alt="" />
    </div>
  ))}
</section>

<article className='down_Icon'>
  {secondLogo.map((item) => (
    <div className="icon_item" key={item.id}>
      <img src={item.image} alt="" />
    </div>
  ))}
</article>
      </div>
  )
}

export default Icon
