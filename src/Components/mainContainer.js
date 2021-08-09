import React from 'react'
import ContentImage from './contentImage'
import ContentLogin from './contentLogin'

export default function mainContainer() {
  return (
    <div className='MainContainer'>
      <ContentLogin/>
      <ContentImage/>
    </div>
  )
}
