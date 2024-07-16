const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			backgrounds: ["gray", "blue"]
			},
		actions: {
			getAgendaInfo: () => {
				const store = getStore()
				fetch('https://playground.4geeks.com/contact/agendas/leivi')
				.then((response) => {
				  console.log(response)
			  
				  return response.json();
				})
				.then((data) => {
				  console.log(data)
				  console.log(data.contacts)
			  
				  setStore({contacts: data.contacts});
				})
				.then((error) => {
				  console.log(error)})			  
			},
			addContact: (name, address, phone, email) => { 
				const store = getStore()
				
				console.log({name: name, phone: phone, email: email, address: address})
				fetch('https://playground.4geeks.com/contact/agendas/leivi/contacts', {
					method: "POST",
					headers: {
 
						'Content-Type': 'application/json'
					
					},
					body: JSON.stringify({
						name: name, phone: phone, email: email, address: address

					})
					
				})
				.then((response) => response.json())
				.then((data) => {
					setStore ({contacts: data})
				})
				
				.then(() => {
					console.log (`CONTACT CREATED ${store.contacts}`)
				})
			},

			editContact: (contactId, updatedContact) => {
				const store = getStore()

				
				fetch(`https://playground.4geeks.com/contact/agendas/leivi/contacts/${contactId}`, {
				  method: "PUT", // Update existing contact, use PUT for edits
				  headers: {
					'Content-Type': 'application/json'
						},
				  body: JSON.stringify(updatedContact),
				  
				})
				  .then((response) => response.json()) 
				  .then((data) => {
					
					const updatedContacts = store.contacts.map((contact) =>
					  contact.id === contactId ? data : contact
					);
					setStore({ contacts: updatedContacts });
				  })
				  .catch((error) => console.error(error)); 
			  },
			  deleteContact: (contactId) => {
				const store = getStore()
				
				fetch(`https://playground.4geeks.com/contact/agendas/leivi/contacts/${contactId}`, {
				  method: "DELETE",
				})
				  .then((response) => {
					if (response.ok) { 
					  const updatedContacts = store.contacts.filter((contact) => contact.id !== contactId);
					  setStore({ contacts: updatedContacts });
					} else {
					  console.error("Error deleting contact:", response.statusText); 
					}
				  })
				  .catch((error) => console.error(error)); 
			  },
			},
		  };
		};
		
		export default getState;
			
			// Use getActions to call a function within a fuction
		// 	exampleFunction: () => {
		// 		getActions().changeColor(0, "green");
		// 	},
		// 	loadSomeData: () => {
		// 		/**
		// 			fetch().then().then(data => setStore({ "foo": data.bar }))
		// 		*/
		// 	},
		// 	changeColor: (index, color) => {
		// 		//get the store
		// 		const store = getStore();

		// 		//we have to loop the entire demo array to look for the respective index
		// 		//and change its color
		// 		const demo = store.demo.map((elm, i) => {
		// 			if (i === index) elm.background = color;
		// 			return elm;

		// 		//reset the global store
		// 		setStore({ demo: demo });

		// 	});
		// 	//add to contact list
		// 	addcontact: () => {
					
		// 	}
		// 	}
