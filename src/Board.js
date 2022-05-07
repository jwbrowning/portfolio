import React, { useState } from 'react';
import { Chess } from 'chess.js';
import Piece from './Piece'
import './App.css';
import chessboard from './Images/chessboard.png';
import bB from './Images/BBishop.png';
import bK from './Images/BKing.png';
import bN from './Images/BKnight.png';
import bP from './Images/BPawn.png';
import bQ from './Images/BQueen.png';
import bR from './Images/BRook.png';
import wB from './Images/WBishop.png';
import wK from './Images/WKing.png';
import wN from './Images/WKnight.png';
import wP from './Images/WPawn.png';
import wQ from './Images/WQueen.png';
import wR from './Images/WRook.png';

const pieceSize = 75;

const images = {
    'P': wP,
    'R': wR,
    'N': wN,
    'B': wB,
    'Q': wQ,
    'K': wK,
    'p': bP,
    'r': bR,
    'n': bN,
    'b': bB,
    'q': bQ,
    'k': bK,
    null: null
};

function GetImage(piece) {
    if(piece == null) return "";
    let p = piece.color == 'w' ? piece.type.toUpperCase() : piece.type;
    return images[p];
}

const cord = {
    'a': 0,
    'b': 1,
    'c': 2,
    'd': 3,
    'e': 4,
    'f': 5,
    'g': 6,
    'h': 7,
    '8': 0,
    '7': 1,
    '6': 2,
    '5': 3,
    '4': 4,
    '3': 5,
    '2': 6,
    '1': 7,
}

function XCord(sq) {
    var file = sq.charAt(0);
    return pieceSize * cord[file];
}

function YCord(sq) {
    var rank = sq.charAt(1);
    return pieceSize * cord[rank];
}

function GetPieces(board, flipped) {
    var ps = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            var b = board[i][j]
            if (b != null) {
                ps.push(
                    { type: GetImage(b), x: 75 * (flipped ? 7 - j : j), y: 75 * (flipped ? 7 - i : i), key: ps.length }
                );
            }
        }
    }
    return ps;
}

const cordToFile = {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
}

function GetFile(x) {
    return cordToFile[x];
}

function GetRank(y) {
    return "" + (8 - y);
}

function GetSquare(flipped, x, y) {
    x /= pieceSize;
    y /= pieceSize;
    if (flipped) {
        x = 7 - x;
        y = 7 - y;
    }
    return GetFile(x) + GetRank(y);
}

function Board(props) {
    const [chess, setChess] = useState(new Chess());

    var startSq = ""
    var endSq = ""
    var startX = 0
    var startY = 0

    const [flipped, setFlipped] = useState(false);

    const [pieces, setPieces] = useState(GetPieces(chess.board(), flipped));

    const [highlightedSquares, setHighlightedSquares] = useState([])

    const UpdatePieces = (f=flipped) => {
        setPieces(GetPieces(chess.board(), f));
    }

    const Flip = () => {
        setFlipped(!flipped)
        UpdatePieces(!flipped)
    }

    const DragStart = (e, x, y) => {
        // e.preventDefault();
        e.dataTransfer.effectAllowed = 'move'
        startSq = GetSquare(flipped, x, y);
        // highlightedSquares = [startSq]
        // setHighlightedSquares(highlightedSquares)
        console.log('start ' + startSq)
        const size = pieceSize * 8;
        startX = Math.floor((e.nativeEvent.offsetX / size) * 8) * 75;
        startY = Math.floor((e.nativeEvent.offsetY / size) * 8) * 75;
        endSq = "";
    }

    const handleDragLeave = event => {
        event.dataTransfer.effectAllowed = 'move'
        event.preventDefault()
    };
    const handleDragOver = event => {
        event.dataTransfer.effectAllowed = 'move'
        event.preventDefault()
    };
    const handleDragEnter = event => {
        event.dataTransfer.effectAllowed = 'move'
        event.preventDefault()
    };

    const DropPiece = (e, x, y) => {
        const size = pieceSize * 8;
        const oX = startX - (Math.floor((e.nativeEvent.offsetX / size) * 8) * 75);
        const oY = startY - (Math.floor((e.nativeEvent.offsetY / size) * 8) * 75);
        x = x - oX
        y = y - oY
        DragEnd(e, x, y)
    }

    const DropPieceBoard = (e, x, y) => {
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].x == x && pieces[i].y == y) return;
        }
        DragEndBoard(e, x, y)
    }

    const DragEnd = (e, x, y) => {
        e.dataTransfer.effectAllowed = 'move'
        e.preventDefault()
        endSq = GetSquare(flipped, x, y);
        console.log('end ' + endSq)
        if (startSq != "") {
            chess.move({ from: startSq, to: endSq })
            setChess(chess);
            UpdatePieces();
        }
        startSq = "";
        endSq = "";
        // highlightedSquares = []
        // setHighlightedSquares(highlightedSquares)
    }

    const Click = (e, x, y) => {
        var sq = GetSquare(flipped, x, y);
        console.log("click " + sq);
        if (startSq == "") {
            // console.log("start")
            startSq = sq;
            // highlightedSquares = [startSq]
            // setHighlightedSquares(highlightedSquares)
        } else {
            // console.log("end")
            endSq = sq;
            chess.move({ from: startSq, to: endSq })
            setChess(chess);
            UpdatePieces();
            startSq = "";
            // highlightedSquares = []
            // setHighlightedSquares(highlightedSquares)
            endSq = "";
        }
    }

    const ClickBoard = (e) => {
        const size = pieceSize * 8;
        const x = Math.floor((e.nativeEvent.offsetX / size) * 8) * 75;
        const y = Math.floor((e.nativeEvent.offsetY / size) * 8) * 75;
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].x == x && pieces[i].y == y) return;
        }
        Click(e, x, y)
    }

    const DragEndBoard = (e) => {
        const size = pieceSize * 8;
        const x = Math.floor((e.nativeEvent.offsetX / size) * 8) * 75;
        const y = Math.floor((e.nativeEvent.offsetY / size) * 8) * 75;
        // for (var i = 0; i < pieces.length; i++) {
        //     if (pieces[i].x == x && pieces[i].y == y) return;
        // }
        DragEnd(e, x, y)
    }

    return(
        <div className='board-and-stuff'>
            <div className='board'
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={DropPieceBoard}
            onClick={ClickBoard}>
                <img className='no-drag'
                    src={chessboard}
                    height='100%'
                    width='100%'/>
                {pieces.map((piece) => (
                    <Piece type={piece.type} x={piece.x} y={piece.y} key={piece.key} 
                    onDragStart={DragStart}
                    onDragEnd={DragEnd}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={DropPiece}
                    onClick={Click} />
                ))}
                
            </div>
            <div className='button-panel'>
                <button className='panel-button'
                onClick={Flip}>
                    Flip Board
                </button>
            </div>
        </div>
    );
}

export default Board;