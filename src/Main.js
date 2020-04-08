import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-start outbox">
      <div className="panel d-flex flex-column justify-content-center align-items-center">
        <h1>Dental Practice</h1>
        <Link to="/signin" role="button" className="btn btn-primary btn-lg btn-round">Start</Link>
      </div>
    </div>
  );
}

export default Main;
