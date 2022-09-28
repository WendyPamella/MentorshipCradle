import React from 'react'

const courseCards = ({className, children}) => {
  return (
    <article className={`CourseCards ${className}`}>
        {children}
    </article>
  )
}

export default courseCards