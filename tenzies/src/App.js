import React from 'react' 
import Die from './Die.js'
import {nanoid} from "nanoid"

function App() {
  const [dice, setDice] = React.useState(generateDice())

  function generateDice () {
    const diceArray = []
    for (let i = 0; i < 10; i++){
      diceArray.push({
        id: nanoid(),
        isHeld: false,
        value: Math.ceil((Math.random() * 6))
      })
    }
    return diceArray
  }

  function roll(){
    setDice(generateDice())
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(
      die => id === die.id ? {...die, isHeld: !die.isHeld} : die
      )
    )
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
    <main className="main">
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

      <button onClick={roll}>Roll</button>
      

    </main>
  );
}

export default App;
