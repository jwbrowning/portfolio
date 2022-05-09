import React from 'react'
import fischer from '../Images/fischerasciiscreenshot.png'

export default function Home() {
    return (
        <div className='ascii-art'>
            <h2 className='desc'>
                a chess website for training and following games
            </h2>
            <h3 className='fischer-quote'>
                iF YoU ReAlLy aNaLyZe cHeSs oBjEcTiVeLy...iT'S BeEn a lOuSy gAmE BaCk eVeN To tHe tImE Of mOrPhY!
            </h3>
            <h3 className='fischer-quote2'>
                aLL pReArRaNgEmEnT, aLL tHeOrY
            </h3>
            <img src={fischer}
                className="fit-image"
                height='100%'
                width='100%' />
        </div>
    )
}