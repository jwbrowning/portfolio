import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

function PortfolioElement(props) {

    return (
        <div className='portfolio-element'>
            <div className='background-image'
            style={{
                backgroundImage: 'url(' + props.bkgsrc + ')',
                width: '95vw',
                height: '60vh',
                backgroundSize: 'cover',
                // padding: '5px'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,.8)',
                    // padding: '5%'
                }}>
                    <div className='element-stuff'>
                        {/* <div className='element-image'> */}
                            <img className='element-image no-drag'
                                src={props.src}
                                height='40%'
                                width='40%'/>
                        {/* </div> */}
                        <div className='element-desc'>
                            <div className='titles'>
                                <h2>
                                    {props.title}
                                </h2>
                                <h3 className='subtitle'>
                                    {props.subtitle}
                                </h3>
                            </div>
                            {props.link != "" ? <h3 className='element-link'>
                            {'\n\n'}<a onClick={() => {
                                // ReactGA.event({
                                //     category: 'Home',
                                //     action: 'Clicked Twitter Link'
                                // });
                            }} className='element-link' target="_blank" rel="noopener noreferrer" href={props.link}>{props.link}</a>
                            </h3> : <></>}
                            <p>
                                {props.desc}
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PortfolioElement;