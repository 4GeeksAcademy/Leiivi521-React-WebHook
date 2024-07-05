import React from "react";
import { Link } from "react-router-dom";

export const Editcontact = () => {
    // const { store, actions } = useContext(Context);

	return(

	<div>
		<h1>Edit Contact List</h1>
		<p>please select the recipient your would like update or remove from your list</p>
		<Link to="/">
      <button>(back)Full Contact List</button>
    </Link>

	</div>

	);

};
