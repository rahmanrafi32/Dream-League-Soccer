import React, { useEffect, useState } from 'react';
import HomeBanner from '../Banner/HomeBanner';
import Team from '../Teams/Team';

const Home = () => {
    const [teams,setTeams]=useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
        .catch(err=>console.log(err))
    },[])
    
    return (
        <div className='container'>
            <HomeBanner/>
            <div className='row'>
                {
                    teams.map(team=><Team team={team} key={team.idTeam}/>)
                }
            </div>
        </div>
    );
};

export default Home;