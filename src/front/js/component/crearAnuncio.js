import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Context } from "../store/appContext";

export const AnounceCreator = () => {
    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({
        titulo: '',
        detalle: '',
        nivel: [],
        autor: 'Daniela Millán'
    })
    const addNivel = (e) => {
        let formulario = form;
        formulario.nivel.push(e.target.value)
        setForm(formulario)
    }
    const addTitulo = (e) => {
        let formulario = form;
        formulario.titulo.push(e.target.value)
        setForm(formulario)

    }
    const addDetalle = (e) => {
        let formulario = form;
        formulario.detalle.push(e.target.value)
        setForm(formulario)

    }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Título del Anuncio</Form.Label>
                <Form.Control type="text" placeholder="Retorno a clases presenciales" onChange={(e) => addTitulo(e)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detalles del anuncio</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={(e) => addDetalle(e)} />
            </Form.Group>
            <Form.Group>
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
            </Form.Group>
            <Button variant="primary" onClick={() => { actions.addAnnouncement(form) }}>Agregar Nuevo Anuncio</Button>
        </Form>
    )
}