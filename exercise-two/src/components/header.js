import React from 'react';

function Header(){
	return(
		<header className = "Header">
			<h1>Weather Application</h1>
			<div className="citiesNav">
				<a className = "cityNav" href="/?city=toronto">Toronto</a>
				<a className = "cityNav" href="/?city=vancouver">Vancouver</a>
				<a className = "cityNav" href="/?city=Topeka">Topeka</a>
				<a className = "cityNav" href="/?city=oaxaca">Oaxaca</a>
			</div>
		</header>
	);
}

export default Header;