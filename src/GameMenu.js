import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function GameMenu() {
    const [infoMenuExpand, setInfoMenuExpand] = useState(false);
    const infoMenu = (
        <>
            <div className="form-group">
                <label htmlFor="gamer">Name</label>
                <input type="text" id="gamer" className="form-control" />
            </div>
        </>
    );

    const handleExtraInfoCheckboxChange = (evt) => {
        console.log(`checked? ${evt.target.checked}`);
        setInfoMenuExpand(evt.target.checked);
    };

    return (
        <div className="container h-100 d-flex justify-content-center align-items-start outbox">
            <form className="panel d-flex flex-column">
            <h1>Configue Game</h1>
            <div className="form-group">
                <label htmlFor="practice"><i class="fas fa-tooth"></i> Practice</label>
                <select name="practice" id="practice" className="form-control">
                    <option selected>Dental Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Root Canel</option>
                    <option>Tooth Extraction</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="gameType"><i class="fas fa-gamepad"></i> Mode</label>
                <select name="gameType" id="gameType" className="form-control">
                    <option selected>Practice</option>
                    <option>Free Mode</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="gameType"><i class="fas fa-hat-wizard"></i> Level</label>
                <select name="gameType" id="gameType" className="form-control">
                    <option>Easy</option>
                    <option selected>Normal</option>
                    <option>Hard</option>
                    <option>Elite</option>
                </select>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="check" onChange={handleExtraInfoCheckboxChange}/>
                <label htmlFor="check" className="form-check-label">Extra Info</label>
            </div>
            {
                infoMenuExpand &&
                    infoMenu
            }
            <Link to="/" role="button" className={`btn btn-primary btn-lg btn-round align-self-start`}>Start Game</Link>
            </form>
        </div>
    );
}

export default GameMenu;
