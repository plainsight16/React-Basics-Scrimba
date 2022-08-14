import React from 'react' 
import useWindowSize from "react-use/lib/useWindowSize"
import Die from './Die.js'
import ConfettiElement from './Confetti.js'
import Scoreboard from './Scoreboard.js'
import {nanoid} from "nanoid"


function App() {
  const [dice, setDice] = React.useState(generateDice())

  const [tenzies, setTenzies] = React.useState({isWon: false, start: true})

  const [timer , setTimer] =  React.useState(0)

  const {width, height} = useWindowSize()

  React.useEffect(()=>{
    let sameValue = true
    for (let i = 0; i < dice.length; i++){
      const currentDie = dice[i]
      const nextDie = dice[(i + 1) % dice.length]
      if (currentDie.value !== nextDie.value)
          sameValue = false
    }

    const allGreen = dice.every(die => die.isHeld)

    if(sameValue && allGreen){
      setTenzies({start: true, isWon: true})
      clearInterval(intervalRef.current)
    }
  }, [dice])

  const intervalRef = React.useRef(); 
  

  function newDieElement(){
    return {
      id: nanoid(),
      isHeld: false,
      value: Math.ceil((Math.random() * 6))
    }
  }

  function generateDice(){
    const diceArray = []
    for (let i = 0; i < 10; i++){
      diceArray.push(newDieElement())
    }
    return diceArray
  }

  function roll(){
    setDice(oldDice => oldDice.map(die => die.isHeld ? die : newDieElement()))
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(
      die => id === die.id ? {...die, isHeld: !die.isHeld} : die
      )
    )
  }

  function reset(){
    setTenzies(oldTenzies => ({...oldTenzies, start: false}))
    setDice(generateDice())

      const id = setInterval(()=>{
        setTimer(oldTime => oldTime + 1)
      }, 1000)
      intervalRef.current= id;
    
  }

  const diceElements = dice.map(die => 
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  )


  return (
    <div>
      <Scoreboard timer={timer}/>
     
      <main className="main">

        <ConfettiElement
          fall={tenzies.isWon}
          width={width}
          height={height}
        />


        <header>
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.
          </p> 
        </header>

        <div className="dice--container">
            {diceElements}
        </div>

        {
          tenzies.start ? <button onClick={reset}>New Game</button> : <button onClick={roll}>Roll</button>
        } 
    </main>
    </div>
    
  );
}

export default App;
