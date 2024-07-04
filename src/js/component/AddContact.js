import React from "react"
import { Context } from "../store/appContext";
import { useContext } from "react";



export const Addcontact = () => { 
    const { store, actions } = useContext(Context);

    return(
    <div className="Addcontact">
        <input type="text" placeholder="Enter Task Here"></input>
        <button>Add</button>
        <button>Edit</button>


    </div>


    


    );

};