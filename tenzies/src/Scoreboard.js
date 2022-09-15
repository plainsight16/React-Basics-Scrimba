import React from "react";

export default function Scoreboard ({timer, highScore}){

    const formatScore = (score) =>{
        let formattedScore = 0
        let zeroCount = 0
        if (score / 10 <= 1) zeroCount = 3
        else if (score / 10 <= 10) zeroCount = 2
        else if (score / 10 <= 100) zeroCount = 1
        else zeroCount = 0 
        formattedScore = "0" * zeroCount + score
        return formattedScore
    }

    return (
        
        <div className="scoreboard">
            <h1 className="score">Best-Time: {formatScore(highScore)}s</h1>
            <h1 className="score">Time: {formatScore(timer)}s</h1>
        </div>
    )
}