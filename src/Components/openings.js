import React from 'react'
import Board from './Board'

export default function Home() {
    return (
        <div>
            <Board type='opening trainer' pieceSize={64}/>
        </div>
    )
}