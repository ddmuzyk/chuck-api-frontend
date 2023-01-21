import React from "react";
import './Output.css';

const Output = ({onRouteChange, joke, onButtonClick, name, entries}) => {
    return (
        <div>
            <ul>
                <li onClick={() => onRouteChange('signin')} className="signout">Sign out</li>
            </ul>
            <p className="userinfo">Hello {name}, you've generated {entries} jokes so far...</p>
            <div className="output">
                <div className="joke">
                    {joke}
                </div>
                <button 
                type="button" 
                onClick={onButtonClick}
                >Generate
                </button>
            </div>
        </div>
    )
}

export default Output;