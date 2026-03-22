import React from 'react'
import './Marketing.css'
import Button from './Button'

const Marketing = () => {
  return (
    <div className='main_Marketing'>
      <section className='all_Btns'>
       <Button name="Marketing" className="marketing_Btn" />
       <Button name="Operations" className="operations_Btn" />
       <Button name="IT" className="it_Btn" />
       <Button name="Leadership" className="leadership_Btn" />
      </section>
      <article className='maxi'>
        <div className='campaign'>
            <img src="https://assets.asana.biz/transform/a06e7cef-41f6-4474-b06e-ae0e43501edb/homepage_ai_update?io=transform:fill,width:960&format=webp" alt="Campaign" />
        </div>
        <div className='roi'>
            <h2 className='maxi_Campaign'>Maximize campaign ROI</h2>
            <ul className="feature_list">
               <li>Streamline campaign management</li>
               <li>Enhance creative production</li>
               <li>Manage events and editorial calendars</li>
            </ul>
             <div className="features_btn">
        <Button  name="Get started" className="feature_btn" />
      </div>
        </div>
      </article>
    </div>
  )
}

export default Marketing
