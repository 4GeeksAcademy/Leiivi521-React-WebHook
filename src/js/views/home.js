import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Contactlist from "../component/contactlist"
import { Addcontact } from "../component/AddContact";

export const Home = () => (
	<div>
		<h1>Contact List</h1>
		<Addcontact />
		{/* <Contactlist /> */}

	</div>
);
