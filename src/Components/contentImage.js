import React from 'react'
import Myimg from '../images/unnamed.png'

function contentImage() {
  return (
    <div className='ContainerImage'>
      <div className='content-learn-more'>
        <h3>New Update Avaliable</h3>
        <span>We are odded some new</span>
        <span>Awesome fectures</span>
        <button>LEARN MORE</button>
      </div>
      <img src={Myimg} alt='Imagem de Login' className='LoginImage' />
    </div>
  )
}

export default contentImage
