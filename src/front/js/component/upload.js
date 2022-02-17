import React, { useState, useContext } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { Context } from "../store/appContext";


export function Upload() {
    const { store, actions } = useContext(Context);

    //variables de estado de formulario dentro del componente Upload
    const [formulario, setFormulario] = useState({
        categoria: '',
        nivel: [],
        nombre: "",
        propietario: 'Daniela Millán',
        url: "",
    })
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('');


    const addNivel = (e) => {
        let obj = formulario;
        if (e.currentTarget.checked && !(obj.nivel.includes(e.target.value))) {

            obj.nivel = [...obj.nivel, e.target.value]
            setFormulario(obj)
        }
        //FALTA ELIMINAR SI LE SACO EL CHECK


        //console.log(formulario)
    }

    const formHandler = (e) => {

        e.preventDefault();
        const file = e.target[1].files[0];
        uploadFiles(file);
    };

    const uploadFiles = (file) => {
        setStatus('')
        console.log(file)
        //
        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
                if (prog === 100) {
                    setStatus('green')
                }
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);

                    let form = formulario;
                    form.url = downloadURL;
                    setFormulario(form)
                });
            }
        );
    };

    return (

        <form onSubmit={formHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre del Documento</label>
                <input type="text" className="form-control" onChange={
                    (e) => {
                        let objeto = formulario;
                        objeto.nombre = e.target.value;
                        setFormulario(objeto)
                        console.log(formulario)
                    }
                } />
            </div>

            <div className="mb-3">
                <div className="row">
                    <div className="col-8">
                        <input className="form-control " type="file" id="formFile" />
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-success align-middle">Agregar</button>
                    </div>
                    {progress != 0 ? progress + "%" : ''}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"> O Adjuntar URL de Documento</label>
                <input type="text" className="form-control" onChange={(e) => {
                    let objeto = formulario;
                    objeto.url = e.target.value;
                    setFormulario(objeto)

                }} />
            </div>
            <hr />
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Indicar Tipo de Documento</label>
                <select className="form-select" aria-label="Default select example" onChange={(e) => {
                    let objeto = formulario;
                    objeto.categoria = e.target.value;
                    setFormulario(objeto)
                }}>
                    <option selected>Seleccionar Opción</option>
                    <option value="Referente Curricular">Referente Curricular</option>
                    <option value="Material Educativo">Material Educativo</option>
                    <option value="Protocolo">Protocolo</option>
                    <option value="Planificacion">Planificación</option>
                </select>

            </div>
            <hr />
            <fieldset className="row mb-3">
                <legend className="col-form-label col-sm pt-0">Nivel educativo</legend>
                <div className="col-sm-7">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="salaCuna" onChange={(e) => addNivel(e)} />
                        <label className="form-check-label" htmlFor="gridRadios1" >
                            Sala Cuna
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="salaCunaMayor" onChange={(e) => addNivel(e)} />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Sala Cuna Mayor
                        </label>
                    </div>
                    <div className="form-check">{/*HACER UN MAP DE ESTO */}
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medioMenor" onChange={(e) => addNivel(e)} />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Medio Menor
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medios" onChange={(e) => addNivel(e)} />                        <label className="form-check-label" htmlFor="gridRadios1">
                            Medios
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medioMayor" onChange={(e) => addNivel(e)} />
                        <label className="form-check-label" htmlFor="gridRadios1">
                            Medio Mayor
                        </label>
                    </div>
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={(e) => { actions.addDocument(e, formulario) }}>
                Agregar Nuevo Contenido
            </button>



        </form>



    );
}


