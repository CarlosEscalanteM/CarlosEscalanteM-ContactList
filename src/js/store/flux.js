const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			], contactList: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/CarlosEscalanteM")
					.then(Response => Response.json())
					.then(Result => setStore({ contactList: Result }))
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

				//reset the global store
				setStore({ demo: demo });
			},
			addContact: (full_name, email, address, phone) => {
				const newContact =
					{
						"full_name": full_name,
						"email": email,
						"agenda_slug": "CarlosEscalanteM",
						"address": address,
						"phone": phone,
					}

				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					}, body: JSON.stringify(newContact)
				}).then(Response => Response.json())
					.then(Result => {
						setStore({contactList: [...getStore().contactList, newContact]})
						
					})
			},
			editContact: (id, full_name, email, address, phone) => {

				const contact = getStore().contactList.filter(contact => contact.id == id) // returns [{full_name: Something, phone: something, ...}] 

				if (contact.length != 0) {
					fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						}, body: JSON.stringify({
							"full_name": full_name.length ? full_name : contact[0].full_name,
							"email": email.length ? email : contact[0].email,
							"agenda_slug": "CarlosEscalanteM",
							"address": address.length ? address : contact[0].email,
							"phone": phone.length ? phone : contact[0].phone,
						})
					}).then(Response => Response.json())
						.then(Result => console.log(Result))
				}

			},
			deleteContact: (id) => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}).then(Response => Response.json())
					.then(Result => {
						const newContactList = getStore().contactList.filter(contact => contact.id != id)
						setStore({ contactList: newContactList })
						console.log(Result)
					})
			}
		}
	};
};

export default getState;
