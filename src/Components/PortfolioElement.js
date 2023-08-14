import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

function PortfolioElement(props) {

    const [expanded, setExpanded] = useState(true);

    return (
        <div className='portfolio-element'
            style={{
                width: expanded ? '95vw' : '95vw'
            }}
            // onClick={(e) => {setExpanded(!expanded)}}
        >
            <div className='background-image'
            style={{
                backgroundImage: 'url(' + props.bkgsrc + ')',
                width: '100%',
                height: expanded ? '60vh' : '20vh',
                backgroundSize: 'cover',
                // padding: '5px'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,.75)',
                    // padding: '5%'
                }}>
                    <div className='element-stuff'>
                        {/* <div className='element-image'> */}
                            {
                                expanded ? 
                                    props.src ? 
                                    <img className='element-image no-drag'
                                    src={props.src}
                                    height='40%'
                                    width='40%'
                                    />
                                    :
                                    <iframe className='no-drag'
                                    src={"https://www.youtube.com/embed/" + props.vid}
                                    title='Youtube video player'
                                    height='70%'
                                    width='40%'
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscrope; picture-in-picture'
                                    />
                                : <div></div>
                            }
                        {/* </div> */}
                        <div className='element-desc'
                            style={{
                                width: expanded ? '50%' : '50%'
                            }}
                        >
                            <div className='titles'>
                                <h2>
                                    {props.title}
                                </h2>
                                <h3 className='subtitle'>
                                    {props.subtitle}
                                </h3>
                            </div>
                            <h3 className='element-link'>
                            {props.links != undefined ? props.links.map((item, i) => {
                                return <def>{'\n\n'}<a onClick={() => {
                                    ReactGA.event({
                                        category: 'Portfolio Element',
                                        action: 'Clicked ' + props.title + " " + item.text + " link"
                                    });
                                }} className='element-link' target="_blank" rel="noopener noreferrer" href={item.url}>{item.text}</a>
                                </def>
                            }) : <></>}
                            </h3>
                            {props.link != "" ? <h3 className='element-link'>
                            {'\n\n'}<a onClick={() => {
                                ReactGA.event({
                                    category: 'Portfolio Element',
                                    action: 'Clicked Link in ' + props.title
                                });
                            }} className='element-link' target="_blank" rel="noopener noreferrer" href={props.link}>{props.link}</a>
                            </h3> : <></>}
                            {expanded ? props.desc.map((item, i) => {
                                return <p>{item}</p>
                            }) : <div></div>}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PortfolioElement;