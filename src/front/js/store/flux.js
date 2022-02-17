const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			documentos: [],
			anuncios: [],

		},
		actions: {

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
