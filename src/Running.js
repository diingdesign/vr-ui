import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Link, useParams } from 'react-router-dom';
import instrumentImage from './assets/images/handinstrument.png';

function Instrument(props) {
    const [active, setActive] = useState(false);
    const handleClick = (evt) => {
        setActive(!active);
    };
    return (
        <>
            <div className={`card instrument-card${active ? " active" : ""}`} onClick={handleClick}>
                <img className="card-img-top" src={instrumentImage} alt="Instrument" />
                <div className="card-body py-2">
                    <h5 className="card-title">Instrument</h5>
                </div>
                <span class="badge"><i class="fas fa-lg fa-check-circle"></i></span>
            </div>
        </>
    );
}

function MultipleSelect(props) {
    const instruments = []
    for (var i=0;i < 14;i++) {
        instruments.push(<Instrument />)
    }
    return (
        <div className="card-columns">
            {instruments}
        </div>
    );
}

function Running(props) {
    const { stepId } = useParams();
    const alertRef = useRef();
    const [shallDismiss, setShallDismiss] = useState(false);
    useEffect(() => {
        setTimeout(function() {
            setShallDismiss(true);
        }, 2000);
    });

    return (
        <div className="container p-5 position-relative d-flex justify-content-center">
            <div className="row game-step-box">
                <div className="col-4 d-flex flex-column align-items-end">
                    <div className="game-panel left">
                        <h1>{`Step ${stepId}`}</h1>
                        <h3>Teeth Cleaning</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat leo quis metus faucibus, ut convallis ante pretium.</p>
                    </div>
                    <Link to="/settings" className="btn btn-secondary py-2 my-3 btn-panel" role="button">
                        <i class="fas fa-cog"></i>
                    </Link>
                </div>
                <div className="col-8">
                    <div className="game-panel right d-flex flex-column">
                        <div className="selection flex-grow-1">
                            <MultipleSelect />
                        </div>
                        <div className="buttons pt-3 d-flex flex-column align-items-end">
                            <Link className="btn btn-primary" role="button" to={`/running/${parseInt(stepId) + 1}`} >Done</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`alert alert-success mt-4 position-absolute dismissable-alert ${shallDismiss ? " dismiss" : ""}`} role="alert" ref={alertRef}>
                The <strong>GAME</strong> is running! Press MENU key in controller to show or hide the menu.
                <button className="close" type="button" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
}

export default Running;
