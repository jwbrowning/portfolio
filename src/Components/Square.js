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
        transform: 'translate(' + props.x + 'px, ' + props.y + 'px)'
    }

    let color = {
        backgroundColor: 'rgba(255, 217, 0, 0.294)'
    }

    return(
        <div className='square'
        onDragEnter={dragEnter}
        onDragLeave={dragExit}
        onDragOver={props.onDragOver}
        onDrop={(e) => {props.onDrop(e, props.x, props.y)}}
        style={highlight ? {...trans, ...color} : {...trans}}>
            <span className={props.type}/>
        </div>
    );
}

export default Square;