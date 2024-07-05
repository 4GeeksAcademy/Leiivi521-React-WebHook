import React from "react";
import { Link } from "react-router-dom";



export const Fulllist = () => {
    // const [ fulllist, setfulllist ] = useContext(Context);

	return(

	<div>
		<h1>Full Contact List</h1>
		<input type="text" placeholder="Enter Name..."></input>
		<input type="text" placeholder="Enter Phone#..."></input>
		<button>Add Contact</button>
		
		<ul>
			<li>
				John
			</li>
			<li>
				Richard
			</li>
		</ul>

		<Link to="/editcontact">
      <button>Update List</button>
    </Link>

	</div>
	

	);

};
