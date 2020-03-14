import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,
		 faSun,
		 faCloud,
		 faCloudShowersHeavy,
		 faBolt,
		 faSnowflake,
		 faCloudRain,
		 faSmog,
		 faWind} from '@fortawesome/free-solid-svg-icons'

//switch looks at the conditions and returns an image. this is helpful because there is a default to fall back on
const Icon= ({weatherType}) => {
	switch(weatherType) {
		case 'Clouds': 
			return <FontAwesomeIcon icon={faCloud}/>
		case 'Rain': 
			return <FontAwesomeIcon icon={faCloudShowersHeavy}/>
		case 'Drizzle': 
			return <FontAwesomeIcon icon={faCloudRain}/>
		case 'Clear': 
			return <FontAwesomeIcon icon={faSun}/>
		case 'Thunderstorm': 
			return <FontAwesomeIcon icon={faBolt}/>
		case 'Snow': 
			return <FontAwesomeIcon icon={faSnowflake}/>
		case 'Mist': 
			return <FontAwesomeIcon icon={faSmog}/>
		case 'Smoke': 
			return <FontAwesomeIcon icon={faSmog}/>
		case 'Haze': 
			return <FontAwesomeIcon icon={faSmog}/>
		case 'Tornado': 
			return <FontAwesomeIcon icon={faWind}/>
		default:
			return <FontAwesomeIcon icon={faSun}/>
	}
};

function WeatherImage({weatherType}){
	return(
		<div className = "WeatherImage">
			<Icon weatherType={weatherType}/>
		</div>
	);
}

export default WeatherImage;