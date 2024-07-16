import { useState } from "react";
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Fulllist = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");




  const handleAddContact = (name, address, phone, email) => {
    // Dispatch an action to add the new contact to the API using actions.addContact
    actions.addContact(name, address, phone, email);
    console.log(name, address, phone, email)

    // Reset the state variables for the new contact form
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
     
      {/* Add new contact form */}
      <h2>Add New Contact</h2>
      <input
        type="text"
        placeholder="Enter Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Address..."
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Phone..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={()=> handleAddContact(name, address, phone, email)}>Add</button>

      <h1>Full Contact List</h1>
      {/* Display existing contacts */}
      {store.contacts.map((contact, index) => {
        return (
          <div  className="card w-75 row"  key={index}>
            <ul className="list-group list-group-flush col">
              <li className="list-group-item">{contact.name}</li>
              <li className="list-group-item">{contact.address}</li>
              <li className="list-group-item">{contact.phone}</li>
              <li className="list-group-item">{contact.email}</li>
             </ul>

             <Link to={`/editcontact/${contact.id}`}>
              <button className="btn btn-danger col">
                Edit
              </button>
            </Link>
            <button onClick={()=> actions.deleteContact(contact.id)}>DELETE</button>
            {/* CREATE A DELETING BUTTON AND CALL THE FUNCTION IN YOUR FLUX, REMEMBER TO PASS THE REQUIRED PARAMETERS */}
          </div>
        );
      })}

    </div>
  );
};

export default Fulllist;
