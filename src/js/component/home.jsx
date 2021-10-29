import React from "react";

//include images into your bundle

import App from "./App";
import NavBar from "./NavBar";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<App />
			<Footer />
		</>
	);
};

export default Home;
