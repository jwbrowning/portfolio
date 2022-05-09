import React, { useState } from 'react'
import { Chess } from 'chess.js';
import '../App.css';

function Piece(props) {
    return(
        <div className='piece'
        draggable="true"
        onDragStart={(e) => {props.onDragStart(e, props.x, props.y)}}
        onDragEnter={props.onDragEnter}
        onDragLeave={props.onDragLeave}
        onDragOver={props.onDragOver}
        onDrop={(e) => {props.onDrop(e, props.x, props.y)}}
        // onDragEnd={(e) => {props.onDragEnd(e, props.x, props.y)}}
        // onmouse={(e) => {props.onDragEnd(e, props.x, props.y)}}
        onClick={(e) => {props.onClick(e, props.x, props.y)}}
        style={{transform: 'translate(' + props.x + 'px, ' + props.y + 'px)'}}>
            <img className='no-drag'
                src={props.type}
                height='100%'
                width='100%'/>
        </div>
    );
}

export default Piece;