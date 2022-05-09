import React, { useState } from 'react'
import '../App.css';

function Square(props) {
    return(
        <div className='square'
        style={{transform: 'translate(' + props.x + 'px, ' + props.y + 'px)'}}>
            <span className={props.type}/>
        </div>
    );
}

export default Square;