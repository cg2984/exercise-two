import React, {useEffect,useState} from 'react'
import axios from 'axios'

//API Keys
const defaultKey = '28a8f4bb10179b820b9c760bc2c7a3f5'

function Home(){
	//this is the default version of the weather data so that we have somewhere to put it when it loads. initially, it is empty
	//useState will keep track of the data and update it on the page while useEffect pulls different data
	const [weatherData, setWeatherData] = useState({});
	//makes the default city value Seoul
	//useState is just a function that 
	const [city,setCity] = useState('Seoul');
	const[curTemp,setCurTemp] = useState('');
	useEffect(() => {
		//this was taken from the axios documentation and is how you do a get request for api
		// Make a request for the weather by city
		axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${defaultKey}`)
		  .then(function (response) {
		    // handle success
		    console.log(response);
		    //this is where we take the data from the API and assign it to a ?something?
		    setWeatherData(response.data);
		  })
		  .catch(function (error) {
		    // handle error
		    console.log(error);
		  })
		  .finally(function () {
		    // always executed
		  });
	//he little []); thing keeps console.log from updating a ton of times because the brackets have to be there to tell useEffect when to update
	//if there is nothing in the brackets than the useEffects will only update once
	}, []);
	
	//these are for ensuring that the data is loaded before the website tries to use it
	useEffect(() => {
		if(weatherData.main){
			setCurTemp(weatherData.main.temp);
		}
	},[weatherData]);

	console.log("weather data", weatherData);
	return (
		<div className="Home">
			<h1 className = 'cityName'>{city}</h1>
			<div className="WeatherInfo">
				<div className='CurrentTemp'>
					<p className = "CurrentTempLabel">Current Temperature</p>
					<p className = 'CurrentTempNumber'>{curTemp}&#176;</p>
				</div>
				<div className='OtherTemp'>
					<p>High Temp: <strong>{weatherData.main&&weatherData.main.temp_max}&#176;</strong></p>
					<p>Low Temp: <strong>{weatherData.main&&weatherData.main.temp_min}&#176;</strong></p>
					<p>Humidity: <strong>{weatherData.main && weatherData.main.humidity}</strong></p>
				</div>
			</div>
		</div>
	);
}
//on the first render {weatherData.main.humidity} is going to be undefined because on first run weatherData is an empty object
//this can fixed by making a useState for the data to make sure that the data exists before we use it
//can also be fixed with weatherData.main&&weatherDatat.main.humidity
export default Home;