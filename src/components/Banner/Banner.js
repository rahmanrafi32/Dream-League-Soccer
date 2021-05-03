import React from 'react';

const Banner = (props) => {
    return (
        <div className='container'>
            {
                props.detail.map(banner =>
                    <div className='container' style={{backgroundImage: `url(${banner.strStadiumThumb})`}}>
                    <div className="text-center">    
                        <img className='m-5' style={{width:"28%"}} src={banner.strTeamBadge} alt=""/>
                    </div>
                 </div>
                )
            }
        </div>    
    );
};

export default Banner;