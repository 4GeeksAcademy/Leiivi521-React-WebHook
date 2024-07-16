import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import  Fulllist  from "./views/fulllist";
import { Editcontact } from "./views/editcontact";




//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{/* <Route path="/" element={<Home />} /> */}
						<Route exact path="/" element={<Fulllist />} />
						<Route exact path="/editcontact/:id" element={<Editcontact />} />
						

						
						
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
		
	);
		
};
<div> 
		<p>If you can see this it working</p>
		</div>

export default injectContext(Layout);
