const Header = (props) => {
  return(
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
} 

/*Being passed an array of 3 objects
Each object has a name and exercises
Put each in a paragraph
*/
const Content = (props) => {
  
  const first = props.parts[0]
  const second = props.parts[1]
  const third = props.parts[2]

  return(
    <>
      <p>
        {first.name} {first.exercises}
      </p>
      <p>
        {second.name} {second.exercises}
      </p>
      <p>
        {third.name} {third.exercises}
      </p>
    </>
  )
} 

/*Being passed array of 3 objects
Each object has an exercises parameter.
Add all of them and display that in a paragraph */
const Total = (props) => {
  const first = props.parts[0]
  const second = props.parts[1]
  const third = props.parts[2]
  const numExercises = first.exercises + second.exercises + third.exercises
  return(
    <>
      <p>
        Number of exercises {numExercises}
      </p>
    </>
  )
} 

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App
