import React, { Component } from 'react'; 

//switch looks at the conditions and returns an image. this is helpful because there is a default to fall back on
//icon is a components but doesnt need to be exported because it is only being used locally
const Icon= ({weatherType}) => {
	switch(weatherType) {
		case 'Cloud': 
			return <FontAwesomeIcon icon={faCoffee}/>
		case 'Rain': 
			return <FontAwesomeIcon icon={faCoffee}/>
		case 'Clear': 
			return <FontAwesomeIcon icon={faCoffee}/>
		case 'Mist': 
			return <FontAwesomeIcon icon={faCoffee}/>
		default:
			return <FontAwesomeIcon icon={faCoffee}/>
	}
};


function WeatherImage({weatherType}){
	console.log('weatherType',weatherType);
		return(
		<div className = "weatherImage">
			<Icon weatherType={weatherType}/>
		</div>
	)
}

export default WeatherImage;