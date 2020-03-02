import React from 'react'

//API Keys
const defaultKey = '0cd88707776d127102b4f2783c730054'

function Home(){
	return (
		<div className="Home">
			<h1>Weather In City</h1>
			<div className="WeatherInfo">
				<div className='CurrentTemp'>
					<p className = "CurrentTempLabel">Current Temperature</p>
					<p>42&#176;</p>
				</div>
				<div className='OtherTemp'>
					<p>High Temp: <strong>48&#176;</strong></p>
					<p>Low Temp: <strong>40&#176;</strong></p>
					<p>Humidity: 53%</p>
				</div>
			</div>
		</div>
	);
}

export default Home;