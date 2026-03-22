import React from 'react'
import './Secure.css'
import Button from './Button'

const Secure = () => {
  return (
    <div className='secure'>
      <section className='gov'>
        <div className='gov_Image'>
            <img src="https://assets.asana.biz/transform/9d71c62a-0d94-48e1-a980-68a38f671b00/web-uses-governmentindustry-asanagovdesktop-en-US?io=transform:fill,width:768&format=webp" 
            alt="Asana Gov" />
        </div>
        <div className='asana_Gov'>
            <h3>Stay secure and compliant with Asana Gov</h3>
            <p>Asana Gov empowers government agencies to coordinate critical work—<br/>
            from strategic planning to rapid response—on a platform that’s easy to<br/>
            implement, scales seamlessly, and meets your compliance needs.</p>
        </div>
        <div className='gov_Btn'>
            <Button name="Check out Asana Gov" className="check"/>
        </div>
      </section>
    </div>
  )
}

export default Secure
