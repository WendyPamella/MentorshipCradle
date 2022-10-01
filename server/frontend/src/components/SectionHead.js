import React from 'react'
import {FaCrown} from 'react-icons/fa'

const SectionHead  = ({icon,title,className}) => {
  return (
    <div className='section__head'>
        <span>{<FaCrown />}</span>
        <h2>Courses</h2>
    </div>
  )
}

export default SectionHead