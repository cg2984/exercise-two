import React from 'react';

function Header(){
	return(
		<header className = "Header">
			<h1>Weather Application</h1>
			<nav className="citiesNav">
				<a className = "cityNav" href="/?city=toronto">Toronto</a>
				<a className = "cityNav" href="/?city=vancouver">Vancouver</a>
				<a className = "cityNav" href="/?city=Topeka">Topeka</a>
				<a className = "cityNav" href="/?city=oaxaca">Oaxaca</a>
			</nav>
		</header>
	);
}

export default Header;