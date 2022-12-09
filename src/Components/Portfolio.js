import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import PortfolioElement from './PortfolioElement';

import ChessAssessGIF from '../Images/chessassess.gif';
import ChessAssessPNG from '../Images/chessassess_pic.png';

import FootballPic from '../Images/football.png';
import FootballBkg from '../Images/footballbackground.jpeg';

import LEUFPic from '../Images/leuf.jpg';
import LEUFBkg from '../Images/leuf2.png';

import ZeldaGIF from '../Images/zelda.gif';
import ZeldaBkg from '../Images/zeldabackground.jpg';

import atcPic from '../Images/atc.png';
import atcBkg from '../Images/atcislands.png';

import aaPic from '../Images/aa.jpg';
import cgPic from '../Images/cg.png';

import SkydivingPic from '../Images/skydiving.jpg';

var chessAssessDesc = "A chess website I made for training and following tournaments. It gained some traction during the FIDE Candidates Tournament 2022 held in June 2022. The site allowed spectators to follow the games live while getting updated predictions for how likely each result of the game was. On top of this, every move, each player's percentage chance of winning the tournament was updated live.\nThe site also hosts a unique opening trainer which has received positive feedback from many serious chess players and learners. I plan on adding more chess related projects to the site in the near future."

var footballDesc = "A program that simulates NFL games based on past team and player stats. It takes into account injuries, snap percentages, target shares, and more to simulate games and predict results. Right now it's close to rivaling Vegas lines in prediction accuracy, and is continually improving."

var leufDesc = "A mobile football manager game published on iOS and Android with thousands of downloads and positive reviews. The game fits a unique niche in football mobile games, giving the player complete control over their team. You can draft players, sign free agents, draw plays, and control your players in games."

var zeldaDesc = "A re-creation of the original Legend of Zelda game's first dungeon, done for a project course at Ohio State. I was out group of 5's unofficial leader: I lead our meetings, helped others with programming and class structure, and often filled in many different areas of the project. I also implemented an awesome dynamic lighting feature that was not in the original game."

// var atcDesc = "This is a game currently in development as part of my final semester Capstone Course at Ohio State. I'm the leader and scrum master of our team of 5. The idea for the game is to combine a serious, tense game environment with a silly, goofy character and control system. We think this juxtaposition will lead to a humorous and fun end product. We're implementing inverse-kinematic, Gang-Beast-like controls and using them for sword combat and placing the character in a procedurally generated map of random floating islands with enemies to kill. I'm super excited to see this project through to completion!"
var atcDesc = [
    "This is my senior year Capstone project at Ohio State. I was the Leader and Scrum Master of our group of 5 as we set out to develop a game from scratch throughout the course of a semester. I learned a lot after a summer observing and taking part in stand-up meetings with a Game Dev team at Age of Learning, and I was able to apply what I learned there to make sure meetings ran smoothly. I strived to create an environment where everyone felt comfortable giving input and communicating with each other.",
    // "The idea for the game was to combine a serious, scary game environment with a silly, goofy character and control system. This juxtaposition lead to a humorous and fun end product that we are all proud of. We implemented many technical features throughout the course of the semester, including procedural floating island-generation, an inverse-kinematic, Gang-Beasts-like control system, along with a complex Active Ragdoll to give the main character a hilarious, physically-animated look. Take a look at our game's trailer and technical poster to see more!"
]

var aaDesc = "I had the great pleasure of interning at Age of Learning over this past summer, working on Adventure Academy, an MMO (massively multiplayer online game) aimed at education for kids aged 8-13. I had the opportunity to work closely with a team of professional developers, sit in and participate in technical discussions and meetings, and learn what the workflow is like on such a large project with many moving parts."

function Portfolio() {

    return (
        <div className='Portfolio'>
            <h1>Projects and Stuff by Johnathan Browning</h1>
            <div className='desc-stuff element-stuff'>
                <img className='aboutme-image no-drag'
                    src={SkydivingPic}
                    height='40%'
                    width='40%'/>
                <div className='element-desc'>
                    <div className='titles'>
                        <h2>
                            {"About Me"}
                        </h2>
                        <h3 className='subtitle'>
                            jwbrowning19@gmail.com
                        </h3>
                    </div>

                    <h3 className='element-link'>
                    {/* </h3>
                    <h3 className='element-link'> */}
                    {'\n\n'}<a onClick={() => {
                        // ReactGA.event({
                        //     category: 'Home',
                        //     action: 'Clicked Twitter Link'
                        // });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/johnathan-browning/"}>{"LinkedIn"}</a>
                    {'\n\n'}<a onClick={() => {
                        // ReactGA.event({
                        //     category: 'Home',
                        //     action: 'Clicked Twitter Link'
                        // });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://github.com/jwbrowning"}>{"Github"}</a>
                    {/* </h3>
                    <h3 className='element-link'> */}
                    {'\n\n'}<a onClick={() => {
                        // ReactGA.event({
                        //     category: 'Home',
                        //     action: 'Clicked Twitter Link'
                        // });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://twitter.com/JBrowningIndie"}>{"Twitter"}</a>
                    </h3>
                    <p className='desc-pg'>
                        Hey, I'm Johnathan! Thanks for checking out my portfolio page.
                    </p><p className='desc-pg'>
                        I'm currently a student at The Ohio State University and I'll be graduating with 
                        a Bachelor of Science in <b><i><u>Computer Science and Engineering</u></i></b>, with a specialization in <b><i><u>Computer Graphics and Game Design</u></i></b> in <b><i><u>December 2022</u></i></b>.
                    </p><p className='desc-pg'>
                        I have a passion for <b><i><u>Game Development</u></i></b> and love programming all kinds of projects. 
                        Outside of programming, I enjoy chess, football, poker! I could talk about each for hours. 
                        Feel free to reach out to me via email, Twitter, or LinkedIn!
                    </p><p className='desc-pg'>
                        Below are some of the projects I'm most proud of.
                    </p>
                </div>
            </div>

            <PortfolioElement
            bkgsrc={cgPic}
            src={aaPic}
            title={"Adventure Academy (Internship)"}
            subtitle={"Unity | C#"}
            desc={[aaDesc]}
            />

            <PortfolioElement
            bkgsrc={atcBkg}
            vid={"JChD1lu5chY"}
            title={"Above the Clouds"}
            subtitle={"Unity | C#"}
            desc={atcDesc}
            link={"https://docs.google.com/presentation/d/e/2PACX-1vQzF60rTPMMj5Ltqx357EYp8KcPtATdzU9j9n9n54TPmbe-U0MiELcYtMJc7hn-7Q/pub?start=false&loop=false&delayms=3000"}
            />

            <PortfolioElement
            bkgsrc={LEUFBkg}
            vid={"EcxWRxjut5M"}
            title={"Light 'Em Up Football"}
            subtitle={"Unity | C#"}
            desc={[leufDesc]}
            link={"https://apps.apple.com/us/app/light-em-up-football/id1549307517"}
            />

            <PortfolioElement
            bkgsrc={ChessAssessPNG}
            src={ChessAssessGIF}
            title={"Chess Assess"}
            subtitle={"React | JavaScript | HTML | CSS"}
            desc={[chessAssessDesc]}
            link={"https://chessassess.com/"}
            />

            <PortfolioElement
            bkgsrc={ZeldaBkg}
            src={ZeldaGIF}
            title={"Legend of Zelda Re-Creation"}
            subtitle={"C# | Monogame"}
            desc={[zeldaDesc]}
            link={"https://github.com/jwbrowning/ZeldaProject3902"}
            />

            <PortfolioElement
            bkgsrc={FootballBkg}
            src={FootballPic}
            title={"NFL Simulations"}
            subtitle={"C# | Python"}
            desc={[footballDesc]}
            link={""}
            />
        </div>
    )
}

export default Portfolio;