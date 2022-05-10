import React, { useState } from 'react';
import { Chess } from 'chess.js';
import axios from 'axios';

import Piece from './Piece'
import Square from './Square'

import chessboard from '../Images/chessboard.png';
import bB from '../Images/BBishop.png';
import bK from '../Images/BKing.png';
import bN from '../Images/BKnight.png';
import bP from '../Images/BPawn.png';
import bQ from '../Images/BQueen.png';
import bR from '../Images/BRook.png';
import wB from '../Images/WBishop.png';
import wK from '../Images/WKing.png';
import wN from '../Images/WKnight.png';
import wP from '../Images/WPawn.png';
import wQ from '../Images/WQueen.png';
import wR from '../Images/WRook.png';

import '../App.css';

const pieceSize = 64;

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
                    { type: GetImage(b), x: pieceSize * (flipped ? 7 - j : j), y: pieceSize * (flipped ? 7 - i : i), key: ps.length }
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

function GetCords(flipped, square) {
    var x = cord[square.charAt(0)];
    var y = cord[square.charAt(1)];
    if (flipped) {
        x = 7 - x;
        y = 7 - y;
    }
    return [x, y]
}

function Board(props) {
    const [chess, setChess] = useState(new Chess());

    const [startSq, setStartSq] = useState('');
    var endSq = ''
    var startX = 0
    var startY = 0

    const urlStart = 'https://explorer.lichess.ovh/lichess?variant=standard&fen=';
    const urlEnd = '&play=&since=2012-01&until=2022-04&speeds=classical%2Crapid%2Cblitz&ratings=2000%2C2200%2C2500'

    const [flipped, setFlipped] = useState(false);

    const [autoRespond, setAutoRespond] = useState(false);

    const [pieces, setPieces] = useState(GetPieces(chess.board(), flipped));

    const [squares, setSquares] = useState([])

    const UpdatePieces = (f=flipped) => {
        setPieces(GetPieces(chess.board(), f));
    }

    const Flip = () => {
        setFlipped(!flipped);
        UpdatePieces(!flipped);
    }

    const ToggleTraining = () => {
        setAutoRespond(!autoRespond);
        requestResponse(chess, !autoRespond);
    }

    const requestResponse = (ch, respond=autoRespond) => {
        if (!respond) return;
        var fen = ch.fen();
        console.log(fen);
        // fen = 'rnbqkbnr%2Fpppppppp%2F8%2F8%2F8%2F8%2FPPPPPPPP%2FRNBQKBNR+w+KQkq+-+0+1'
        fen = fen.replaceAll(' ', '+');
        fen = fen.replaceAll('/', '%2F');
        var url = urlStart + fen + urlEnd;
        axios.get(url)
            .then((response) => {
                var moves = [];
                var total = 0;
                for (var i = 0; i < response.data.moves.length; i++) {
                    var c = response.data.moves[i].black + response.data.moves[i].white + response.data.moves[i].draws;
                    moves.push({move: response.data.moves[i].san,
                        count: c});
                    total += c;
                }
                var rand = Math.random();
                var a = 0;
                if (moves.length == 0) {
                    setAutoRespond(false);
                    return;
                }
                for (var i = 0; i < moves.length; i++) {
                    if (rand < (moves[i].count / total) + a) {
                        if (!chess.move(moves[i].move)) {
                            setAutoRespond(false);
                        } else {
                            setChess(chess);
                            UpdatePieces();
                        }
                        break;
                    }
                    a += moves[i].count / total;
                }
            })
            .catch((error) => {
                console.log(error);
                setAutoRespond(false);
            });
    }

    const updateSquares = (sq) => {
        const sqs = [];
        if (sq != '') {
            const sCords = GetCords(flipped, sq);
            sqs.push({ type: 'start', x: sCords[0] * pieceSize, y: sCords[1] * pieceSize, key: 0 });
            const moves = chess.moves({ verbose: true, square: sq });
            for (var i = 0; i < moves.length; i++) {
                const cords = GetCords(flipped, moves[i].to);
                if (chess.get(moves[i].to)) {
                    sqs.push({ type: 'capture', x: cords[0] * pieceSize, y: cords[1] * pieceSize, key: i + 1 });
                } else {
                    sqs.push({ type: 'move', x: cords[0] * pieceSize, y: cords[1] * pieceSize, key: i + 1 });
                }
            }
        }
        setSquares(sqs);
    }

    const DragStart = (e, x, y) => {
        e.dataTransfer.effectAllowed = 'move'
        var startSqu = GetSquare(flipped, x, y);
        setStartSq(startSqu);
        console.log('start ' + startSqu)
        const size = pieceSize * 8;
        startX = Math.floor((e.nativeEvent.offsetX / size) * 8) * pieceSize;
        startY = Math.floor((e.nativeEvent.offsetY / size) * 8) * pieceSize;
        endSq = "";
        updateSquares(startSqu);
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
        const oX = startX - (Math.floor((e.nativeEvent.offsetX / size) * 8) * pieceSize);
        const oY = startY - (Math.floor((e.nativeEvent.offsetY / size) * 8) * pieceSize);
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
        console.log('end ' + endSq + ' from ' + startSq)
        if (startSq != "") {
            console.log('move')
            if (chess.move({ from: startSq, to: endSq })) {
                requestResponse(chess);
            }
            setChess(chess);
            UpdatePieces();
        }
        setStartSq("");
        endSq = "";
        updateSquares("");
    }

    const Click = (e, x, y) => {
        var sq = GetSquare(flipped, x, y);
        console.log("click " + sq);
        if (startSq == "") {
            // console.log("start")
            setStartSq(sq);
            updateSquares(sq);
        } else if (startSq == sq) {
            setStartSq("");
            endSq = "";
            updateSquares("");
        } else {
            // console.log("end")
            if (chess.move({ from: startSq, to: sq })) {
                requestResponse(chess);
            }
            setChess(chess);
            UpdatePieces();
            setStartSq(sq);
            endSq = "";
            updateSquares(sq);
        }
    }

    const ClickBoard = (e) => {
        const size = pieceSize * 8;
        const x = Math.floor((e.nativeEvent.offsetX / size) * 8) * pieceSize;
        const y = Math.floor((e.nativeEvent.offsetY / size) * 8) * pieceSize;
        for (var i = 0; i < pieces.length; i++) {
            if (pieces[i].x == x && pieces[i].y == y) return;
        }
        Click(e, x, y)
    }

    const DragEndBoard = (e) => {
        const size = pieceSize * 8;
        const x = Math.floor((e.nativeEvent.offsetX / size) * 8) * pieceSize;
        const y = Math.floor((e.nativeEvent.offsetY / size) * 8) * pieceSize;
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
                {squares.map((square) => (
                    <Square type={square.type} x={square.x} y={square.y} key={square.key}/>
                ))}
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
                <button className={'panel-button ' + (autoRespond ? 'toggle-on' : 'toggle-off')}
                    onClick={ToggleTraining}>
                        {autoRespond ? 'Stop Training' : 'Start Training'}
                </button>
                <button className='panel-button'
                    onClick={Flip}>
                    Flip Board
                </button>
            </div>
        </div>
    );
}

export default Board;