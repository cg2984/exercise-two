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
//weatherType is connected to home.js which is connected to the data. cant make it not weatherType
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
		case weatherType<100: 
			return <FontAwesomeIcon icon={faWind}/>
		default:
			return <FontAwesomeIcon icon={faSun}/>
	}
};

//you still have to include weatherType={weatherType} when using the WeatherImage component in home.js because Icon has to know what data to give to the switch
function WeatherImage({weatherType}){
	return(
		<div className = "WeatherImage">
			<Icon weatherType={weatherType}/>
		</div>
	);
}

export default WeatherImage;