import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import SwitchButton from 'react-input-switch';

function Tabs(props) {
    return (
        <div className="list-group list-group-flush">
            <button name="0" type="button" onClick={props.onTabClick} className={`list-group-item list-group-item-action custom-item${(props.selectedTabId === 0) ? " active" : ""}`}>Levels</button>
            <button name="1" type="button" onClick={props.onTabClick} className={`list-group-item list-group-item-action custom-item${(props.selectedTabId === 1) ? " active" : ""}`}>Game Settings</button>
            <button name="2" type="button" onClick={props.onTabClick} className={`list-group-item list-group-item-action custom-item${(props.selectedTabId === 2) ? " active" : ""}`}>System</button>
        </div>
    );
}

function Levels() {
    return (
        <div className="list-group list-group-flush">
            <button type="button" className="list-group-item list-group-item-action custom-item active">Step 1: #1</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 2: #2</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 3: #3</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 4: #4</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 5: #5</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 6: #6</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 7: #7</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 8: #8</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 9: #9</button>
            <button type="button" className="list-group-item list-group-item-action custom-item">Step 10: #10</button>
        </div>
    );
}

function Settings() {
    return (
        <div className="list-group list-group-flush">
            <div className="list-group-item custom-item d-flex align-items-center">
                <div className="title-box d-flex flex-column flex-grow-1">
                    <h3>Show Alice</h3>
                    <p>Show or hide the patient</p>
                </div>
                <SwitchButton />
            </div>
        </div>
    );
}

function System() {
    return (
        <div className="list-group list-group-flush">
            <Link to="/" className="list-group-item list-group-item-action custom-item">Restart</Link>
        </div>
    )
}

function Running() {
    const alertRef = useRef();
    const [shallDismiss, setShallDismiss] = useState(false);
    const [selectedTabId, setSelectedTabId] = useState(0);
    const pages = [
        <Levels />,
        <Settings />,
        <System />
    ]
    useEffect(() => {
        setTimeout(function() {
            setShallDismiss(true);
        }, 2000);
    });

    const handleTabClick = (evt) => {
        console.log(evt.target.name);
        setSelectedTabId(parseInt(evt.target.name));
    }
    return (
        <div className="container p-5 position-relative d-flex justify-content-center">
            <div className="panel panel-lg panel-tabs d-flex flex-column">
                <h1>Settings</h1>
                <div className="d-flex flex-row flex-grow-1 tabs-container">
                    <div className="tab-left"><Tabs onTabClick={handleTabClick} selectedTabId={selectedTabId} /></div>
                    <div className="tab-right flex-grow-1 ml-2 pb-4">
                        {
                            pages[selectedTabId]
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Running;
