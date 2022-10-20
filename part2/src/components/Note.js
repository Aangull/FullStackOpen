import React from 'react'

const Note = ({ note }) => {
  return (
    <p>{note.name} {note.exercises}</p>
  )
}

export default Note