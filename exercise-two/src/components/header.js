import React from 'react';

function Header(){
	return(
		<header className = "Header">
			<h1>Weather Application</h1>
			<nav className = "CityNav">
				<a className = "City" href="/?city=toronto">Toronto</a>
				<a className = "City" href="/?city=Seoul">Seoul</a>
				<a className = "City" href="/?city=Miami">Miami</a>
				<a className = "City" href="/?city=oaxaca">Oaxaca</a>
			</nav>
		</header>
	);
}

export default Header;