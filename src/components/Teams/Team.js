import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({team}) => {
    const {strTeam,strTeamBadge,strSport,idTeam}=team;
    return (
        <div className='container col-md-4'>
            <div className="card m-3 p-3 shadow-sm " style={{width: "18rem"}}>
                <img src={strTeamBadge} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text">Sports Type: {strSport}</p>
                    <button className="btn btn-danger"><Link to={'/teams/details/'+idTeam} className='text-white'>Explore <span><FontAwesomeIcon className='ml-2' icon={faArrowRight} /></span></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Team;