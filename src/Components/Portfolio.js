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

import ld52Pic from '../Images/LD52Menu.png';
import ld52Bkg from '../Images/LD52Background.png';

import jamsPic from '../Images/JamsPic.png';
import jamsBkg from '../Images/JamsBkg.png';

import shadersGif from '../Images/shaders.gif';
import shadersBkg from '../Images/shaderbkg.png';

import SkydivingPic from '../Images/skydiving.jpg';

import RomeGIF from '../Images/RomeGameTestGIF.gif'
import RomeBackground from '../Images/RomeGameBackgroundScreenshot.png'

import worldCupGIF from '../Images/ChessAssessWorldCupPicks3.gif'
import worldCupBackground from '../Images/ChessAssessWorldCupTable.png'

import candidatesPic from '../Images/CandidatesGraph.png'
import candidatesBackground from '../Images/CandidatesBackground.png'

import fbsGif from '../Images/fbsgif.gif'
import fbsBkg from '../Images/fbsbkg.png'

var romeGameDesc = "My latest and current project, a solo-developed game made in Unreal Engine 5. You play the role of a senator in an ancient, Rome-like republic, debating on legislation while trying to prevent the republic from collapsing. I am continuing to learn and enhance my skills in UI-development, with gameplay heavily focused on an intuitive, easy-to-understand UI debate system. The game really comes to life with the unique shader style with post-process materials created in Unreal Engine's Material Graph editor as well as C++."

var chessAssessDesc = "A chess website I made for training and following tournaments. It gained some traction during the FIDE Candidates Tournament 2022 held in June 2022. The site allowed spectators to follow the games live while getting updated predictions for how likely each result of the game was. On top of this, every move, each player's percentage chance of winning the tournament was updated live.\nThe site also hosts a unique opening trainer which has received positive feedback from many serious chess players and learners. I plan on adding more chess related projects to the site in the near future."

var footballDesc = "A program that simulates NFL games based on past team and player stats. It takes into account injuries, snap percentages, target shares, and more to simulate games and predict results. Right now it's close to rivaling Vegas lines in prediction accuracy, and is continually improving."

var leufDesc = "A mobile football manager game published on iOS and Android with thousands of downloads and positive reviews. The game fits a unique niche in football mobile games, giving the player complete control over their team. Its user-friendly UI systems allow you draft players, sign free agents, draw plays, and control your players in games."

var zeldaDesc = "A re-creation of the original Legend of Zelda game's first dungeon, done for a project course at Ohio State. I was out group of 5's unofficial leader: I lead our meetings, helped others with programming and class structure, and often filled in many different areas of the project. I also implemented an awesome dynamic lighting feature that was not in the original game."

// var atcDesc = "This is a game currently in development as part of my final semester Capstone Course at Ohio State. I'm the leader and scrum master of our team of 5. The idea for the game is to combine a serious, tense game environment with a silly, goofy character and control system. We think this juxtaposition will lead to a humorous and fun end product. We're implementing inverse-kinematic, Gang-Beast-like controls and using them for sword combat and placing the character in a procedurally generated map of random floating islands with enemies to kill. I'm super excited to see this project through to completion!"
var atcDesc = [
    "This is my senior year Capstone project at Ohio State. I was the Leader and Scrum Master of our group of 5 as we set out to develop a game from scratch throughout the course of a semester. I learned a lot after a summer observing and taking part in stand-up meetings with a Game Dev team at Age of Learning, and I was able to apply what I learned there to make sure meetings ran smoothly. I strived to create an environment where everyone felt comfortable giving input and communicating with each other.",
    // "The idea for the game was to combine a serious, scary game environment with a silly, goofy character and control system. This juxtaposition lead to a humorous and fun end product that we are all proud of. We implemented many technical features throughout the course of the semester, including procedural floating island-generation, an inverse-kinematic, Gang-Beasts-like control system, along with a complex Active Ragdoll to give the main character a hilarious, physically-animated look. Take a look at our game's trailer and technical poster to see more!"
]

var aaDesc = "I had the great pleasure of interning at Age of Learning last summer, working on Adventure Academy, an MMO (massively multiplayer online game) aimed at education for kids aged 8-13. I had the opportunity to work closely with a team of talented professional developers, sit in and participate in technical discussions and meetings, and learn what the workflow is like on such a large project with many moving parts."

var ld52Desc = "A recent game jam I participated in with a group of friends with a different talents/backgrounds. We had 72 hours to create a game based on the theme \"Harvest\". I implemented an inventory system that allows the player to pick up objects and organize them in his inventory. I also created systems for cutscenes and dialogue, which were used for a beginning tutorial scene."

var jamsDesc = "I love participating in game jams! I won't go into too much detail here, but you can check them out using the Link above! Jams are a great way for me to experiment with new tools, learn new things about game development techniques, and gain teamwork experience. Above all, with such strict deadlines and time pressure, game jams allow me to better learn to estimate and manage time wisely."

var shaderDesc = "I started playing around with shaders when I took a graduate level Real Time Rendering course at Ohio State. I love experimenting with different shading techniques to create awesome results. Most of the time I'm working with Unity's Shader Graph and Unreal Engine's Material Graph, but I've also done some coding with C++ and HLSL."

var worldCupDesc = "A 2023 addition to my chess website that tracks one of my favorite chess events, the FIDE World Cup - a giant 200+ player knockout tournament. I created an interactive bracket that allows users to track each player's chances of reaching each tournament round, as well as make picks for themselves to see how different results affect everyone's chances."

var candidatesDesc = "The most recent addition to my chess website that tracked the 2024 FIDE Candidates Tournament, which determined who would challenge the reigning World Champion for the title. For this tournament, I graphed each player's chance of winning the tournament over time for the entire tournament, updating the probabilities live, every move. I also tracked the most critical moves of each round and for the whole tournament by tracking how much the probabilities changed each move."

var fbsDesc = "One of my more recent prototypes exploring networking solutions in Unity: A 1 vs 1 multiplayer football strategy game where you create your own plays and make real time strategic decisions at the line of scrimmage. More info and updates coming soon..."

function Portfolio() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className='Portfolio'>
            <h1>Projects by Johnathan Browning</h1>
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
                    <def>{'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked LinkedIn Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/johnathan-browning/"}>{"LinkedIn"}</a>
                    </def><def>
                    {'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked Github Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://github.com/jwbrowning"}>{"Github"}</a>
                    </def><def>
                    {/* </h3>
                    <h3 className='element-link'> */}
                    {'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked Twitter Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://twitter.com/JBrowningIndie"}>{"Twitter"}</a>
                    </def>
                    </h3>
                    <p className='desc-pg'>
                        Hey, I'm Johnathan! Thanks for checking out my portfolio page.
                    </p><p className='desc-pg'>
                        I'm currently working as a <b><i>Software Engineer</i></b> specializing in <b><i>Unity Development</i></b>.
                    </p><p className='desc-pg'>
                        I graduated from The Ohio State University in May 2023 with my
                        Bachelor's of Science in <b><i>Computer Science and Engineering</i></b>, with a specialization in <b><i>Computer Graphics and Game Design</i></b>.
                    </p><p className='desc-pg'>
                        I have a passion for <b><i>Game Development</i></b> and love programming all kinds of projects. 
                        Outside of programming, I enjoy chess, football, poker, history, and stats! I could talk about each for hours. 
                        Feel free to reach out to me via email, Twitter, or LinkedIn!
                    </p><p className='desc-pg'>
                        Below are some of the projects I'm most proud of.
                    </p>
                </div>
            </div>

            {/* <PortfolioElement
                bkgsrc={RomeBackground}
                src={RomeGIF}
                title={"Roman Senate Debate Game"}
                subtitle={"Unreal Engine | C++"}
                desc={[romeGameDesc]}
            /> */}

            <PortfolioElement
            bkgsrc={fbsBkg}
            src={fbsGif}
            title={"Multiplayer Football Strategy Game"}
            subtitle={"Unity | C#"}
            desc={[fbsDesc]}
            />

            <PortfolioElement
            bkgsrc={atcBkg}
            vid={"JChD1lu5chY"}
            title={"Above the Clouds"}
            subtitle={"Unity | C#"}
            desc={atcDesc}
            links={[
                {
                    url: "https://docs.google.com/presentation/d/e/2PACX-1vQzF60rTPMMj5Ltqx357EYp8KcPtATdzU9j9n9n54TPmbe-U0MiELcYtMJc7hn-7Q/pub?start=false&loop=false&delayms=3000",
                    text: "Technical Poster"
                },
                {
                    url: "https://github.com/jwbrowning/AboveTheClouds-code-samples",
                    text: "Code Samples"
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={LEUFBkg}
            vid={"EcxWRxjut5M"}
            title={"Light 'Em Up Football"}
            subtitle={"Unity | C#"}
            desc={[leufDesc]}
            links={[
                {
                    url: "https://play.google.com/store/apps/details?id=com.SkidGames.LightEmUpFootball&hl=en_US&gl=US",
                    text: "Google Play"
                },
                {
                    url: "https://github.com/jwbrowning/LightEmUpFootball-code-samples",
                    text: "Code Samples"                }
            ]}
            />

            <PortfolioElement
            bkgsrc={cgPic}
            src={aaPic}
            title={"Adventure Academy (Internship)"}
            subtitle={"Unity | C#"}
            desc={[aaDesc]}
            />

            <PortfolioElement
            bkgsrc={ChessAssessPNG}
            src={ChessAssessGIF}
            title={"Chess Assess"}
            subtitle={"React | Node.js | JavaScript | HTML | CSS"}
            desc={[chessAssessDesc]}
            links={[
                {
                    url: "https://chessassess.com/",
                    text: "chessassess.com"
                },
            ]}
            />

            <PortfolioElement
            bkgsrc={worldCupBackground}
            src={worldCupGIF}
            title={"FIDE World Cup Bracket"}
            subtitle={"React | JavaScript | HTML | CSS"}
            desc={[worldCupDesc]}
            links={[
                {
                    url: "https://www.chessassess.com/worldcup",
                    text: "Bracket"
                },
            ]}
            />

            <PortfolioElement
            bkgsrc={candidatesBackground}
            src={candidatesPic}
            title={"FIDE Candidates Tournament 2024"}
            subtitle={"React | JavaScript | HTML | CSS"}
            desc={[candidatesDesc]}
            links={[
                {
                    url: "https://www.chessassess.com/candidates",
                    text: "Candidates Page"
                },
            ]}
            />

            <PortfolioElement
            bkgsrc={ZeldaBkg}
            src={ZeldaGIF}
            title={"Legend of Zelda Re-Creation"}
            subtitle={"C# | Monogame | GIT"}
            desc={[zeldaDesc]}
            links={[
                {
                    url: "https://github.com/jwbrowning/ZeldaProject3902",
                    text: "Source Code"
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={FootballBkg}
            src={FootballPic}
            title={"NFL Simulations"}
            subtitle={"C++ | C# | Python"}
            desc={[footballDesc]}
            link={""}
            />

            <PortfolioElement
            bkgsrc={shadersBkg}
            src={shadersGif}
            title={"Shaders"}
            subtitle={"Unity Shader Graph | HLSL"}
            desc={[shaderDesc]}
            />

            <PortfolioElement
            bkgsrc={ld52Bkg}
            src={ld52Pic}
            title={"Ludum Dare 52"}
            subtitle={"C# | Unity | GIT"}
            desc={[ld52Desc]}
            links={[
                {
                    url: "https://ldjam.com/events/ludum-dare/52/completely-normal-garbageman-simulator",
                    text: "Game Link"
                },
                {
                    url: "https://github.com/jwbrowning/GarbageSimulator-code-samples",
                    text: "Code Samples"
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={jamsBkg}
            src={jamsPic}
            title={"Game Jams"}
            subtitle={"Unreal Engine | Unity | C++ | C# | GIT | More"}
            desc={[jamsDesc]}
            links={[
                {
                    url: "https://sundancekid1019.itch.io/",
                    text: "Link to my Games"
                }
            ]}
            />
        </div>
    )
}

export default Portfolio;