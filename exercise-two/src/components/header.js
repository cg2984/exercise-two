import React from 'react';

function Header(){
	return(
		<header className = "Header">
			<h2>Weather App Header</h2>
			<div className="citiesNav">
				<a href="/?city=toronto">Toronto</a>
				<a href="/?city=vancouver">Vancouver</a>
				<a href="/?city=Topeka">Topeka</a>
				<a href="/?city=oaxaca">Oaxaca</a>
			</div>
		</header>
	)
}

export default Header;