import React from 'react'
import './coursecard.css'

const courseCards = ({className, children}) => {
  return (
    <div className='name'>
    <article className={`CourseCards ${className}`}>
        {children}
    </article>
    </div>
  )
}

export default courseCards