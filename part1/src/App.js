import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const AnecdoteLine = (props) => {
  const text = props.text
  return(
    <h3>{text}</h3>
  )
}

const VotesLine = (props) => {
  const currentVotes = props.currentVotes
  if(currentVotes>=0){
    return(
      <p>{currentVotes} votes</p>
    )
  }
  else{
    return
  }
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)

  let change; //This variable will hold the current index anecdote

  const newAnecdote = () => {
    change = () => Math.floor(Math.random() * anecdotes.length); //This will generate a random number from 0 to the length of the array
    setSelected(change);
  };

  const addVote = () => {
    //1) Copy of the last state of votes
    const votesCopy = [...votes];
    //2) Increment by one the value for the correspondent anecdote
    votesCopy[selected] += 1; //Grab the last value and add 1
    //3 Compare votes to mostVotes index
    if(votesCopy[selected]>votesCopy[mostVotes]){
      setMostVotes(selected)
    }
    //4) Set the array with the update votes to the component's state
    setVotes(votesCopy);
  };

  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteLine text={anecdotes[selected]}/>
      <VotesLine currentVotes={votes[selected]}/>
      <Button handleClick={() => addVote()} text='Vote'/>
      <Button handleClick={() => newAnecdote()} text='Next anecdote'/>
      <h1>Anecdote with the most votes</h1>
      <AnecdoteLine text={anecdotes[mostVotes]}/>
      <VotesLine currentVotes={votes[mostVotes]}/>
      
    </div>
  )
}

export default App
