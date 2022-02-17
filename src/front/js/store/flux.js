const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			],
			documentos: [],
			anuncios: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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

			addDocument: (e, form) => {
				e.preventDefault()
				const store = getStore();
				const actions = getActions();
				setStore({
					documentos: [...store.documentos, form]
				})
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");
				var raw = JSON.stringify(form);
				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch(process.env.BACKEND_URL + "/api/postDocument", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));

			},
			getAllDocument: () => {
				fetch(process.env.BACKEND_URL + "/api/getAllDocument")
					.then(resp => resp.json())
					.then(data => setStore({ documentos: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			addAnnouncement: (form) => {
				console.log(form)

			},
			getAnnouncement: () => {
				fetch(process.env.BACKEND_URL + "/api/getAllAnnoucement")
					.then(resp => resp.json())
					.then(data => setStore({ anuncios: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
		}
	};
};

export default getState;
