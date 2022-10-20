import React from 'react'
import Header from './Header'
import Details from './Details'

const Course = (props) => {
    const { course } = props
    const parts = course.parts
    const total = parts.reduce((sum, part) =>
      sum + part.exercises, 0)
  
    return (
      <div>
        <Header course={course} />
        <Details parts={course.parts}/>
        <p>Total of exercises: {total}</p>
      </div>
    )
  }

  export default Course