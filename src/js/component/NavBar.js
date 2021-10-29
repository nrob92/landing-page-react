import React from "react";

function NavBar() {
	const menu = () => {
		document.querySelector(".responsive").classList.toggle("show");
	};

	return (
		<div className="nav">
			<div className="whole-nav">
				<p className="nav-left">Start Bootstrap</p>
				<div className="iClass">
					<i className="fas fa-bars phone" onClick={menu}></i>
					<ul className="nav-right responsive">
						<li>Home</li>
						<li>About</li>
						<li>Service</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
