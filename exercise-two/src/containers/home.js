import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
//import WeatherImage from './weatherImage.js';

//API Keys
const defaultKey = '28a8f4bb10179b820b9c760bc2c7a3f5'

function Home(){
//-----------Variables---------------------------------------------------------
//this will update useEffect 
let history = useHistory();

//const cloudiness = 
//clouds.all to get the cloud data




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
const[weatherType, setWeatherType] = useState("Clear");
const[weatherData, setWeatherData] = useState({});
const[wind, setWind] = useState("");



//-----------useEffects---------------------------------------------------------
//get city from url. only updates when history updates. which url?????
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
}, [city]);
	
//these are for ensuring that the data is loaded before the website tries to use it
useEffect(() => {
		if(weatherData.main){
			setCurTemp(weatherData.main.temp);
			setHiTemp(weatherData.main.temp_max);
			setLoTemp(weatherData.main.temp_max);
			setHumidity(weatherData.main.humidity);
			setWind(weatherData.wind.speed);
			setWeatherType(weatherData.main.temp);
			setClouds(weatherData.clouds.all);
		}
	},[weatherData]);
	
	console.log("weather data", weatherData);
	console.log("clouds", clouds);
	let newCloud = [194, 241, 255];
	return (
		<div style={{backgroundColor:`${newCloud[0]},${newCloud[1]},${newCloud[2]}`}} className="Home">
			<h1 className = 'cityName'>{city}</h1>
			<div className="WeatherInfo">
				<div className="Temp">
					<div className='CurrentTemp'>
						<p className = 'CurrentTempNumber'>{curTemp}&#176;</p>
					</div>
					<div className = "hiLoTemp">
						<p>High Temp: <strong>{hiTemp}&#176;</strong></p>
						<p>Low Temp: <strong>{loTemp}&#176;</strong></p>
					</div>
				</div>
				<div className='OtherInfo'>
					<p>Humidity: <strong>{humidity}%</strong></p>
					<p>Wind Speed: <strong>{wind}mph</strong></p>
				</div>
			</div>
		</div>
	);

}
//on the first render {weatherData.main.humidity} is going to be undefined because on first run weatherData is an empty object
//this can fixed by making a useState for the data to make sure that the data exists before we use it
//can also be fixed with weatherData.main&&weatherDatat.main.humidity
export default Home;