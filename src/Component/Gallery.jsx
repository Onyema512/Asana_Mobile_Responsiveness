import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='main_Gallery'>
      <section className='ai_Team'>
        <img src="https://embed-ssl.wistia.com/deliveries/5db8175a0d68c14dcbed7b9fcc50dbac.jpg" 
        alt="AI Teammate Gallery" />
      </section>
      <article className='companies'> 
        <h3>85% of Fortune 100 <br/>companies choose Asana¹</h3>
        <img src="https://assets.asana.biz/transform/94a2af9e-55e7-489b-bcd9-7f2836f5e45f/amazon?io=transform:fill,width:375&format=webp" alt="Amazon" />
        <img src="https://assets.asana.biz/transform/7aa89522-d837-49fc-ae5b-d8701de258fd/accenture?io=transform:fill,width:375&format=webp" alt="accenture" />
        <img src="https://assets.asana.biz/transform/64c6de51-290f-40fa-808a-241c6bae8528/JJ?io=transform:fill,width:375&format=webp" alt="Johnson&Johnson" />
        <img src="https://assets.asana.biz/transform/29c5cd4b-7a60-4557-8004-f78cbb8c5ffc/dell?io=transform:fill,width:375&format=webp" alt="DELL" />
        <img src="https://assets.asana.biz/transform/8d9b2024-7c0b-463b-88c0-ee3107d4f5fe/merck?io=transform:fill,width:375&format=webp" alt="MERCK" />
      </article>
    </div>
  )
}

export default Gallery
