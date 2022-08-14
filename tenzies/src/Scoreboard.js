import React from "react";

export default function Scoreboard ({timer}){
    return (
        <div className="scoreboard">
            <h1 className="score">Best-Time: 0000</h1>
            <h1 className="score">Time: {timer}s</h1>
        </div>
    )
}