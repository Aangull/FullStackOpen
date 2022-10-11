import { useState } from 'react'

/* const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) */

const Statistics = (props) => {
  const good = props.good
  const neutral= props.neutral
  const bad = props.bad
  if (good+neutral+bad === 0) {
    return(<p>No feedback given</p>)
  }
  else{
    return(
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Votes: {good + neutral + bad}</p>
        <p>Average: {(good + (neutral * 0) + (bad * -1)) / (good + neutral + bad)}</p>
        <p>Positive Percentage: {good / (good + neutral + bad)}</p>
      </>
    )
  }  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={() => setGood(good+1)}> 
        Good 
      </button>
      <button onClick={() => setNeutral(neutral+1)}> 
        Neutral
      </button>
      <button onClick={() => setBad(bad+1)}> 
        Bad
      </button>

      <h1>Statistics</h1>
      <Statistics 
        good = {good} neutral = {neutral} bad = {bad}>
      </Statistics>
      

    </div>
  )
}

export default App
