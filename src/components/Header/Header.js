import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand text-white" to="/home">Dream League</Link>
                <button className="navbar-toggler btn-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto ">
                    <Link className="nav-link active text-white" to="/home">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-link text-white" to="/home">Clubs</Link>
                    <Link className="nav-link text-white" to="#">About</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;