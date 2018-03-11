import React from 'react';
import rwyNumber from './27.svg'
import './Runway.css';

const Runway = (props) => {
    return <div className="runway">
        <div className="marks">
            <div className="centerline mark">
                <div className="trect" />
                <div className="trect" />
                <div className="trect" />
                <div className="trect" />
                <div className="trect" />
            </div>

            <div className="attentionPoint mark">
                <div className="tside">
                    <div className="trect"></div>
                </div>
                <div className="tside">
                    <div className="trect"></div>
                </div>
            </div>

            <div className="three mark">
                <div className="tside">
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                </div>
                <div className="tside">
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                </div>
            </div>

            <img className='rwyNumber' src={rwyNumber}/>

            <div className="threshold mark">
                <div className="tside">
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                </div>
                <div className="tside">
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                    <div className="trect"></div>
                </div>
            </div>
        </div>
    </div>
}

export default Runway;
