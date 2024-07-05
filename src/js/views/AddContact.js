import React, { useState } from "react"
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Redirect } from "react-router-dom";



export const Addcontact = () => { 
    const { contact, setcontact } = useState(false);
     

    return (
    <div className="Addcontact">

        <input type="text" placeholder="Enter Contact..."></input>
        <button>"Add</button>
        

            {contact} ? <Redirect to={"/editcontact"} />
			<button onClick={()=> setcontact(true)}>Edit/Delete Contacts</button>
		
    </div>
    
    );

};