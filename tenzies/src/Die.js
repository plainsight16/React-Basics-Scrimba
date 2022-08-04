import React from "react"
import diceElements from "./diceElements"
export default function Die({value, isHeld, holdDice }){
    const style = {
        background: isHeld ? "#59E391" : "#FFFFFF"
    }
    
    return (
        <div className="die" style={style} onClick={holdDice}>
            {diceElements[value - 1].element}
        </div>
    )
}