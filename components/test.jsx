import React from 'react'
import '../components/css/test.css'
import NewImage from '../public/images/NotificationImages/new.gif'

function test() {
  return (
    <div className='test'>
      <div className="scrolling-text-container">
        <div className="scrolling-text marqueeAnimation-37574610">
          <li>News 1: Notice Board. Some placeholder text. And some more text. <img src={NewImage} alt="" /> </li>
          <li>News 2: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 3: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 4: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 5: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 6: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 7: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
        </div>
        
      </div>
      <div>
          <a href="">More Links</a>
        </div>
    </div>
  )
}

export default test