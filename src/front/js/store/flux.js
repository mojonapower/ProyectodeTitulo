const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			sms: '',
			documentos: [],
			anuncios: [],
			datosEstudiantes: [],
			funcionarios: [
				{ nombreCompleto: "Personal 1", perfil: "Educadora", numero: '+56946203682' },
				{ nombreCompleto: "Personal 2", perfil: "Administrativa", numero: '+56946203682' },
				{ nombreCompleto: "Personal 3", perfil: "Asistente de la Educación", numero: '+56946203682' }
			],
			apoderado: [
				{ nombreCompleto: "papi 1", nivel: "Sala Cuna Menor", numero: '+56946203682', pupilo: "Andrea," },
				{ nombreCompleto: "papi 2", nivel: "Sala Cuna Menor", numero: '+56946203682', pupilo: "Andrea," },
				{ nombreCompleto: "mami 1", nivel: "Medio Menor", numero: '+56946203682', pupilo: "Andrea," }
			],


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
				const store = getStore();
				const actions = getActions();
				setStore({
					anuncios: [...store.anuncios, form]
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

				fetch(process.env.BACKEND_URL + "/api/postAnnoucement", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.catch(error => console.log('error', error));


			},
			getAnnouncement: () => {
				fetch(process.env.BACKEND_URL + "/api/getAllAnnoucement")
					.then(resp => resp.json())
					.then(data => setStore({ anuncios: data }))
					.catch(error => console.log("Error loading message from backend", error));
			},
			prefixMessage: (datos) => {
				let opciones = [
					{
						opcion: 1,
						español: `Estimada familia, le recordamos que hoy realizaremos el taller ${datos.nombreTaller} en ${datos.ubicacion} a las ${datos.hora}.`,
						creol: `Mezanmi fanmi nap raple jodia nap fè atelye ${datos.nombreTaller} nan ${datos.ubicacion} a ${datos.hora}.`
					},

					{
						opcion: 2,
						español: `Estimada familia le recordamos que su hijo/hija aún no está matriculado, por favor comunicarse con ${datos.persona} `,
						creol: `Chè fanmi, nou raple w pitit gason/pitit fi w la poko enskri, tanpri kontakte ${datos.persona}`
					},
					{
						opcion: 3,
						español: `Estimada familia le recordamos que ${datos.fecha}  tiene agendada su entrevista via ${datos.plataforma}. Lo esperamos`,
						creol: `Chè fanmi, nou raple w ke ${datos.fecha} te pwograme entèvyou ou atravè ${datos.platforma}. Nou tann li`
					},
				]

				let mensaje = opciones[datos.opcion - 1]
				setStore({ sms: mensaje.idioma })
				console.log(getStore)


			}
		}
	};
};

export default getState;
