import React from "react";

function GameInfo(props) {

    const length = 300;

    const clampedEval = props.eval > 4.0 ? 4.0 : props.eval < -4.0 ? -4.0 : props.eval;
    // const clampedEval = 2.5;
    const whiteEvalLength = length * (clampedEval + 4) / 8;
    const blackEvalLength = length * (-clampedEval + 4) / 8;

    const whiteChanceLength = props.whiteChance * length;
    const drawChanceLength = props.drawChance * length;
    const blackChanceLength =props.blackChance * length;
    // const whiteChanceLength = .6 * length;
    // const drawChanceLength = .35 * length;
    // const blackChanceLength = .05 * length;

    let whiteEvalBar = {
        width: whiteEvalLength + 'px',
    }
    let blackEvalBar = {
        width: blackEvalLength + 'px',
    }

    let whiteChanceBar = {
        width: whiteChanceLength + 'px',
    }
    let drawChanceBar = {
        width: drawChanceLength + 'px',
    }
    let blackChanceBar = {
        width: blackChanceLength + 'px',
    }

    return (
        <div className="game-info"
        style={{...props.size}}>
            <div className="game-player-info">
                <h3>{props.whitePlayer + ' - ' + props.blackPlayer}</h3>
            </div>
            <div className="game-eval-info">
                <div className="eval-bar-container">
                    <div className="eval-bar white-eval-bar" style={{...whiteEvalBar}}><b>{props.eval >= 0 ? props.eval.toFixed(2) : ''}</b></div>
                    <div className="eval-bar black-eval-bar" style={{...blackEvalBar}}><b>{props.eval < 0 ? props.eval.toFixed(2) : ''}</b></div>
                </div>
                <div className="prediction-bar-container">
                    <div className="prediction-bar white-bar" style={{...whiteChanceBar}}><b>{Math.round(props.whiteChance * 100) + '%'}</b></div>
                    <div className="prediction-bar gray-bar" style={{...drawChanceBar}}><b>{Math.round(props.drawChance * 100) + '%'}</b></div>
                    <div className="prediction-bar black-bar" style={{...blackChanceBar}}><b>{Math.round(props.blackChance * 100) + '%'}</b></div>
                </div>
            </div>
        </div>
    )
}

export default GameInfo;