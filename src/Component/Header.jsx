import React, { useState } from 'react'
import './Header.css'
import Button from './Button'

const Header = () => {
  return (
      <header className='main_Header'>
        <section className='header_Wrapper'>
            <div className='top_Left'>
                <img src="https://sm.pcmag.com/pcmag_au/review/a/asana/asana_cd5e.jpg" 
                alt="Asana Logo" />
                <nav className='left_Menu'>
                    <ul>
                    <li>Product</li>
                    <li>Solutions</li>
                    <li>Learning & Support</li>
                    <li>Pricing</li>
                    </ul>
                </nav>
            </div>
            <article className='top_Right'>
                <img src="https://assets.asana.biz/transform/3ac30492-304b-4644-a39b-e89fad0df303/SD040-web-nav-GlobeIcon-en-US"
                 alt="Globe" /> 
                <ul>
                    <li className='contact'>Contact Sales</li>
                    <li className='log'>Log in</li>
                </ul>
                <aside className='top_btn'>
                    <Button name="Get Started"
                        style= {{
                         padding: "7px 14px",
            color: "white",
            border: "none",
            borderRadius: "15px",
            background: "black",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"}}/>
                </aside>
            </article>
        </section>
      </header>
    
  )
}

export default Header
