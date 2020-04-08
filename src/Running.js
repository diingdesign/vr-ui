import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';

function Running() {
    const alertRef = useRef();
    const [shallDismiss, setShallDismiss] = useState(false);
    useEffect(() => {
        setTimeout(function() {
            setShallDismiss(true);
        }, 2000);
    });
    return (
        <div className="container p-5">
            <div className={`alert alert-success dismissable-alert ${shallDismiss ? " dismiss" : ""}`} role="alert" ref={alertRef}>
                The <strong>GAME</strong> is running! Press MENU key in controller to restart.
                <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
}

export default Running;
