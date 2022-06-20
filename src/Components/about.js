import React from 'react'
import fischer from '../Images/fischerasciiscreenshot.png'
import axios from 'axios'
import qs from 'qs'
import ReactGA from 'react-ga'

export default function AboutPage() {

    const comingSoon = true;

    return (
        <div className='about'>
            {comingSoon ? 
            <h2>
                coming soon
            </h2> :
            <div>
            <h2>Welcome to Chess Assess!</h2>
            <h4 className='desc'>
                a chess website for training and following games made by Johnathan Browning
                {'\n\n'}<a onClick={() => {
                    ReactGA.event({
                        category: 'About',
                        action: 'Clicked Twitter Link'
                    });
                }} className='twitter-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/JBrowningIndie">@JBrowningIndie</a>
            </h4>
            <h3>
                About My Candidates Prediction Model
            </h3>
            <p>
                I'll go ahead and preface this by saying I am not a statistician or data analyst.
                I'm just a computer science student who enjoys programming and stats.
            </p>
            <p>
                You can follow the 2022 FIDE Candidates Tournament LIVE at 
                <a onClick={() => {
                    ReactGA.event({
                        category: 'About',
                        action: 'Clicked Follow Link'
                    });
                }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://chessassess.com/follow">{' the Follow Tournaments page'}</a>
                . It's unique in that not only do I run simulations between rounds to predict the tournament winner, 
                but I also am actively predicting the result of each game as it's being played, move-by-move.
                I'll describe how I accomplish both of these components and more below.
            </p>
            <h5>
                Simulations
            </h5>
            <p>
                This part isn't new, people (I included) have run simulations for the Candidates for some time now. Check out 
                <a onClick={() => {
                    ReactGA.event({
                        category: 'About',
                        action: 'Clicked Chess Numbers Link'
                    });
                }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/ChessNumbers ">{' @ChessNumbers '}</a>
                and 
                <a onClick={() => {
                    ReactGA.event({
                        category: 'About',
                        action: 'Clicked Pawnalyze Link'
                    });
                }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/Pawnalyze">{' @Pawnalyze '}</a>
                to see some other simulation models.
            </p>
            <p>
                The main criticism I have with these models and the ones I've made in the past is that they are purely elo-based.
                The predictions are pretty boring at the start of the tournament: the higher rated players always more likely to win than the lower rated ones.
                These models don't really account for other factors like form, head-to-head score, must-win situations, etc.
            </p>
            <p>
                To calculate win, draw, loss percentages for two players I used the formulas discussed at
                <a onClick={() => {
                    ReactGA.event({
                        category: 'About',
                        action: 'Clicked Pawnalyze Link'
                    });
                }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/Pawnalyze">{' this super useful site, '}</a>
                which are purely elo-based.
                In conjunction with that I included head-to-head scores and must-win situations as factors.
            </p>
            <p>
                To calculate my 
                For head-to-head scores I used classical games from the past 5 years only.
                I then took a weighted average of the head-to-head scores and elo-based probabilities where head-to-head scores were weighted x/30, 
                and elo-based probabilities were weighted
            </p>
            </div>
            }
        </div>
    )
}