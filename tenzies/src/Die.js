import React from "react"
export default function Die({value, isHeld, holdDice }){
    const style = {
        background: isHeld ? "#59E391" : "#FFFFFF"
    }
    return (
        <div className="die" style={style} onClick={holdDice}>
            <h1>{value}</h1>
        </div>
    )
}