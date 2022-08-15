import React from "react";

export default function Scoreboard ({timer, highScore}){
    return (
        <div className="scoreboard">
            <h1 className="score">Best-Time: {highScore}</h1>
            <h1 className="score">Time: {timer}s</h1>
        </div>
    )
}