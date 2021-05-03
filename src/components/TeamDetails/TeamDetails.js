import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import imgFemale from '../../Photo/female.png';
import img from "../../Photo/male.png";
import Banner from '../Banner/Banner';

const TeamDetails = () => {
    const {idTeam} = useParams()
    const [details,setDetails]=useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res=>res.json())
        .then(data=>setDetails(data.teams))
    },[idTeam])
    return (
        
        <div className='container'>
            <Banner detail={details} key={idTeam}/>
            {
                details.map(detail=>
                    <div className='container'>
                        <div className="card m-3 p-2 bg-primary rounded" style={{maxWidth: "1050px"}}>
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="card-body m-3" style={{width: "100%"}}>
                                        <h5 className="card-title text-white">{detail.strTeam}</h5>
                                        <p className="card-text text-white"><FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt} /> Founded: {detail.intFormedYear}</p>
                                        <p className="card-text text-white"><FontAwesomeIcon className='mr-2' icon={faFlag} /> Country: {detail.strCountry}</p>
                                        <p className="card-text text-white"><FontAwesomeIcon className='mr-2' icon={faFutbol} /> Sport Type: {detail.strSport}</p>
                                        {
                                            detail.strGender==='Male'?<p className="card-text text-white"><FontAwesomeIcon className='mr-2' icon={faMars} /> Gender: {detail.strGender}</p>:<p className="card-text text-white"><FontAwesomeIcon className='mr-2' icon={faVenus} /> Gender: Female</p>
                                        }
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {
                                        detail.strGender==='Male'?<img src={img} style={{width: "100%"}} alt="..."/>:<img src={imgFemale} style={{width: "100%"}} alt="..."/>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='card-text text-white'>{detail.strDescriptionEN}</p>
                            <br/>
                            <p className='card-text text-white'>{detail.strStadiumDescription}</p>
                        </div>
                        <div className='row text-center m-5'>
                            <div className='col-md-12'>
                                 
                                <a className='m-2' href={`https://${detail.strFacebook}`}><FontAwesomeIcon style={{width:"15%",height:"25%"}} icon={faFacebook} /></a>
                                <a className='m-2' href={`https://${detail.strInstagram}`}><FontAwesomeIcon style={{width:"15%",height:"25%"}}  icon={faInstagram} /></a>
                                <a className='m-2' href={`https://${detail.strTwitter}`}><FontAwesomeIcon style={{width:"15%",height:"25%"}} icon={faTwitter} /></a>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default TeamDetails;