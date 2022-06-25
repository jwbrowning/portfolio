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
                    About Chess Assess
                </h3>
                <p>
                    This is a side project of mine to host everything I want to build related to chess. 
                </p>
                <p>
                    I made this site with React, with a reasonable understanding of javascript, html, css.
                </p>
                <p>
                    The 
                    {'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About',
                            action: 'Clicked Lichess API Link'
                        });
                    }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://lichess.org/api">{' Lichess.org API '}</a>
                    has been incredibly helpful for this project, for both accessing the database for my Opening Trainer, and following Live broadcasts for my Follow Tournaments page. 
                </p>
                <h3>
                    About My Candidates Prediction Model
                </h3>
                <p>
                    I'll go ahead and preface this by saying I am not a statistician or data analyst.
                    I'm just a computer science student who enjoys chess, programming and stats.
                    Don't take all of this too seriously; I just do this stuff for fun and I hope it will make your chess experience more enjoyable!
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
                    What makes my model different from these is I try to account for things like head-to-head scores and must-win situations, rather than using only elo.
                </p>
                <p>
                    To calculate win, draw, loss percentages for two players in my simulations I used the formulas discussed at
                    <a onClick={() => {
                        ReactGA.event({
                            category: 'About',
                            action: 'Clicked Wismuth Elo Calc Link'
                        });
                    }} className='twitter-link general-link' target="_blank" rel="noopener noreferrer" href="https://wismuth.com/elo/calculator.html">{' this super useful site, '}</a>
                    which are elo-based.
                </p>
                <p>
                    The next step was trying to account for "must-win" situations. 
                    First I needed to come up with W/D/L percentages for a player in a must-win situation.
                    My assumption is that when a player must win, they will play in such a way that increases their overall variance, at the cost of their expected score in the game.
                    I tried to adjust the formulas to achieve this result. Here is an example:
                </p>
                <p>
                    Let's take a game with two players rated 2780.
                    In a normal situation where neither player needs to win, we predict 23% white win, 64% draw, 13% black win.
                    In a situation where white 100% must win, my model gives 29% white win, 41% draw, 28% black win. 
                    If black 100% must win, we get 40% white win, 38% draw, 22% black win. 
                    If both players 100% must win, we get 38% white win, 34% draw, 28% black win. 
                    To me these numbers seem to make some sense, but perhaps my solution is rather arbitrary. 
                    I'd love to hear thoughts/suggestions.
                </p>
                <p>
                    In order to define what a "must-win" situation really is I assign each player a "Must-Win Factor (MWF)". 
                    This will be a number between 0 and 1 that tells us how much the player needs to win (0 = 0% must win, 1 = 100% must win).
                </p>
                <p>
                    I define MWF = WN / RL
                </p>
                <p>
                    where WN = wins needed; how many wins the player needs to get to the projected tournament-winning score
                </p>
                <p>
                    and RL = rounds left in the tournament
                </p>
                <p>
                    Then I take a weighted average of the W/D/L chance scenarios based on the MWFs for both players.
                </p>
                <p>
                    To incorporate head-to-head scores I used classical games from the past 5 years only.
                    I then took a weighted average of the head-to-head scores and W/D/L chances from above, where head-to-head score x was weighted as x/30. 
                    Using the number 30 in the denominator was also rather arbitrary; it seemed big enough to not let head-to-head scores have too large an affect, but also small enough so that the affect could be noticed.
                </p>
                <h5>
                    Predicting Games Live
                </h5>
                <p>
                    In order to accomplish live updating W/D/L chances, I used a multinomial logistic regression model. 
                    I sampled a database of top-level classical chess games (2650+) and recorded information about the position: 
                    the engine's eval, both player ratings, and less important things such as material count and move number.
                </p>
                <p>
                    The only problem was I really wanted to include clock times as an input, but I do not know of a database of top-level games that contains both players' clock times each move. 
                    To solve this, I downloaded a bunch of games from Lichess's top classical time-control players and tried to see how a time advantage converts to elo points. 
                    I ended up defining a time advantage as (t1 - t2) / (t1 + t2) where t1 and t2 are player 1's clock and player 2's clock, respectively. 
                    This makes sense to me as it accounts for the fact that 1 minute is very valuable in a blitz game, but nowhere near as valuable when both players have 1hr+.
                </p>
                <p>
                    All that was left to do now was combine the two models and update everything every time a move is played, and allow the user to plug in different scenarios to see the outcome. 
                    Instead of constantly re-running simulations, I run 256 different sets of simulations, for every combination of result for each of the 4 games: win, draw, loss, unknown. 
                    I can then use the live-updating W/D/L probabilities in combination with the corresponding simulations to output live updateing tournament victory chances.
                </p>
            </div>
            }
        </div>
    )
}