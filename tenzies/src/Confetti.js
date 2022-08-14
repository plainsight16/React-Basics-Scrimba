import React from 'react'
import Confetti from "react-confetti"

export default function ConfettiElement ({fall, width, height}){
    return(
        <div>
            {fall.isWon && <Confetti width={width} height={height}/>}
        </div>
    )
}