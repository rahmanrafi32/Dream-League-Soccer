import React from 'react';
const backgroundImage = "https://wallpapercave.com/wp/wp1830648.jpg"
var sectionStyle = {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${backgroundImage})`
  };

const HomeBanner = () => {
    return (
         <div className='container' style={sectionStyle}>
             <h1 className='text-white p-5 text-center'>Dream League Soccer</h1>
         </div>
    );
};

export default HomeBanner;