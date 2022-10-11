import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  const text = props.text
  const value = props.value
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral= props.neutral
  const bad = props.bad
  if (good+neutral+bad === 0) {
    return(<p>No feedback given</p>)
  }
  else{
    return(
      <table>
        <tbody>
          <StatisticLine text = 'Good' value = {good}/>
          <StatisticLine text = 'Neutral' value = {neutral}/>
          <StatisticLine text = 'Bad' value = {bad}/>
          <StatisticLine text = 'Total Votes' value = {good + neutral + bad}/>
          <StatisticLine text = 'Average' value = {(good + (neutral * 0) + (bad * -1)) / (good + neutral + bad)}/>
          <StatisticLine text = 'Positive Percentage' value = {good / (good + neutral + bad)}/>
        </tbody>
        
      </table> 
    )
  }  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleButtonPress = (text) => {
    if(text === 'Good'){setGood(good+1)}
    else if(text === 'Neutral'){setNeutral(neutral+1)}
    else{setBad(bad+1)}
  }
  
  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={() => handleButtonPress('Good')} text='Good'/>
      <Button handleClick={() => handleButtonPress('Neutral')} text='Neutral'/>
      <Button handleClick={() => handleButtonPress('Bad')} text='Bad'/>

      <h1>Statistics</h1>
      <Statistics 
        good = {good} neutral = {neutral} bad = {bad}>
      </Statistics>
      

    </div>
  )
}

export default App
