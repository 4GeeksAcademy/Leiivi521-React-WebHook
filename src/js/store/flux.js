const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			todos: [
				{
					Name: "",
					Phone: ""
				}

		
		]},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;


				});
				//add to contact list
				addtodo: () => {
						
				}

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
