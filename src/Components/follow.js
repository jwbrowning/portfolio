import React from 'react'

import Board from './Board'

export default function Follow() {
    return (
        <div>
            {/* <div className='tournament-container'>
                <div className='tournament-info'>
                    <h2>FIDE Candidates Tournament 2022</h2>
                </div>
                <div className='games-and-standings-container'>
                    <div className='tournament-games-container'>
                        <Board type='small-tournament' pieceSize={16}/>
                        <Board type='small-tournament' pieceSize={16}/>
                        <Board type='small-tournament' pieceSize={16}/>
                        <Board type='small-tournament' pieceSize={16}/>
                    </div>
                    <div className='standings-container'>

                    </div>
                </div>
            </div> */}
            <h2 className='info-text'>coming soon:</h2>
            <h2 className='info-text2'>follow the Candidates Tournament 2022</h2>
            <h2 className='info-text3'>-live win/draw/loss chances for each game updated move by move</h2>
            <h2 className='info-text3'>-live tournament victory chances for each player updated each round AND each move</h2>
            <h2 className='info-text3'>-see how different results affect tournament victory chances</h2>
        </div>
    )
}