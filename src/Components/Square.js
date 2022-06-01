import React, { useState } from 'react'
import '../App.css';

function Square(props) {

    const [highlight, setHighlight] = useState(false);

    const dragEnter = () => {
        setHighlight(true);
    }

    const dragExit = () => {
        setHighlight(false);
    }

    let trans = {
        transform: 'translate(' + (props.x) + 'px, ' + (props.y) + 'px)'
    }

    let mTrans = {
        transform: 'translate(' + Math.floor(.3125 * props.pieceSize) + 'px, ' + Math.floor(.3125 * props.pieceSize) + 'px)'
    }

    let color = {
        backgroundColor: 'var(--glow-color)'
    }

    let mSize = {
        width: Math.floor(.375 * props.pieceSize) + 'px',
        height: Math.floor(.375 * props.pieceSize) + 'px'
    }

    return(
        <div className='square'
        onDragEnter={dragEnter}
        onDragLeave={dragExit}
        onDragOver={props.onDragOver}
        onDrop={(e) => {props.onDrop(e, props.x, props.y)}}
        style={highlight ? {...trans, ...color, ...props.pSize} : {...trans, ...props.pSize}}>
            <span className={props.type}
            style={props.type=='move' ? {...mSize, ...mTrans} : {...props.pSize}}/>
        </div>
    );
}

export default Square;