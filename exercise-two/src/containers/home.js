import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import WeatherImage from '../components/weatherImage.js'

//API Keys
const defaultKey = '8ebb908a1214b17270b0677803502d76'

function Home(){
	let history = useHistory();

	//-------USE STATES VARIABLES-----------------------------------------------------------
	//all the states thave have to be tracked. most of them the default value is an empty string
	//this is the default version of the weather data so that we have somewhere to put it when it loads. initially, it is empty
	//useState will keep track of the data and update it on the page while useEffect pulls different data 
	const[city,setCity] = useState('');
	const[curTemp,setCurTemp] = useState('');
	const[hiTemp,setHiTemp] = useState('');
	const[loTemp,setLoTemp] = useState('');
	const[humidity,setHumidity] = useState('');
	const[clouds,setClouds] = useState(0);
	const[weatherType, setWeatherType] = useState("");
	const[weatherData, setWeatherData] = useState({});
	const[wind, setWind] = useState("");

	//-----------useEffects---------------------------------------------------------
	//get city from url. only updates when history updates.
	useEffect(() => {
			let mySearchParams = history.location.search;
			let urlParams = new URLSearchParams(mySearchParams);
			//using method get from search params api 
			let city = urlParams.get('city');
			if(city){
				setCity(city);
			}
	},[history]);

	// Make a request for the weather by city. gets the city from the useEffect above	
	useEffect(() => {
		//this was taken from the axios documentation and is how you do a get request for api
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${defaultKey}&units=imperial`)
			  .then(function (response) {
			    // handle success
			    console.log(response);
			    //this is where we take the data from the API and assign it to a the state WeatherData
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
	}, [city]);
	
	//these are for ensuring that the data is loaded before the website tries to use it
	useEffect(() => {
		if(weatherData.main){
			setCurTemp(weatherData.main.temp);
			setHiTemp(weatherData.main.temp_max);
			setLoTemp(weatherData.main.temp_min);
			setHumidity(weatherData.main.humidity);
			setWind(weatherData.wind.speed);
			setWeatherType(weatherData.weather[0].main);
			setClouds(weatherData.clouds.all);
		}
	},[weatherData]);

	let cloudOpacity = (100-clouds)*0.01

	return (
		<main style={{backgroundColor:`rgb(148, 226, 255, ${cloudOpacity})`}}>
			<section className = "WeatherHead">
				<WeatherImage weatherType={weatherType}/>
				<h1>{city}</h1>
				<WeatherImage weatherType={weatherType}/>
			</section>
			<section className="WeatherInfo">
				<div className="Temp">
					<div className='CurrentTemp'>
						<p className = 'CurrentTempNumber'>{curTemp}&#176;</p>
					</div>
					<div className = "HiLoTemp">
						<p>High Temp: <strong>{hiTemp}&#176;</strong></p>
						<p>Low Temp: <strong>{loTemp}&#176;</strong></p>
					</div>
				</div>
				<div className='OtherInfo'>
					<p>Humidity: <strong>{humidity}%</strong></p>
					<p>Wind Speed: <strong>{wind}mph</strong></p>
					<p>Cloud Coverage: <strong>{clouds}%</strong></p>
					<p>Weather Type: <strong>{weatherType}</strong></p>
				</div>
			</section>
		</main>
	);
}
//on the first render {weatherData.main.humidity} is going to be undefined because on first run weatherData is an empty object
//this can fixed by making a useState for the data to make sure that the data exists before we use it
//can also be fixed with weatherData.main&&weatherDatat.main.humidity
export default Home;