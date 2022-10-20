import React from 'react'
import Note from './Note'

const Details = (props) => {
    console.log(props)
    return(
      props.parts.map((part) => 
        <Note key={part.id} note={part} />
      )  
    )
  }

export default Details