import React, {useState} from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Editcontact = () => {
    const { store, actions } = useContext(Context);
	const { id } = useParams();
	const foundContact = store.contacts.find((contact) => {return contact.id == id})
	
	const [name, setName] = useState(foundContact.name);
	const [address, setAddress] = useState(foundContact.address);
	const [phone, setPhone] = useState(foundContact.phone);
	const [email, setEmail] = useState(foundContact.email);

	const handleContactUpdate = () => {
		const updatedContact = {name: name, address: address, phone: phone, email: email}
		actions.editContact(foundContact.id, updatedContact)
	}

	return(

	<div>
		<input
        type="text"
        placeholder={`${foundContact.name}`}
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
      <Link to = "/">
      <button onClick={()=> handleContactUpdate()}>Edit contact</button>
      </Link>

	</div>

	);

};
