import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../store/appContext";
import { Table, Form, Button } from 'react-bootstrap';

export const Mensaje = () => {
    const { store, actions } = useContext(Context);
    const [destinatario, setDestinatario] = useState('')
    const [form, setForm] = useState({
        destinatarios: [],
        cuerpo: "",
        autor: ''
    })
    const [prefix, setPrefix] = useState({
        idioma: '',
        nombreTaller: '',
        ubicacion: '',
        hora: '',
        persona: '',
        plataforma: '',
        opcion: 0
    })
    const setMotivo = (e, tipo) => {
        let pre = prefix;
        if (tipo === 'motivo') {
            pre.opcion = e.target.value
        }
        else if (tipo === 'idioma') {
            pre.idioma = e.target.value
        }

        setPrefix(pre)
        console.log(pre)
    }

    useEffect(() => {
        console.log(destinatario)
    }, [destinatario])


    return (<>


        <Form>
            <Form.Label>Seleccionar destinatario</Form.Label>
            <Form.Select aria-label="Default select example" onChange={(e) => {

                setDestinatario(e.target.value)

            }}>
                <option value='' >Destinatarios</option>
                <option value="Todos"
                >Todos</option>
                <option value="Sala Cuna">
                    Apoderados Sala Cuna</option>
                <option value="Sala Cuna Mayor ">
                    Apoderados Sala Cuna Mayor</option>
                <option value="Medio Menor">
                    Apoderados Medio Menor</option>
                <option value=" Medios">
                    Apoderados Medios</option>
                <option value="Medio Mayor">
                    Apoderados Medio Mayor</option>
                <option value="Funcionario" >
                    Funcionarias</option>

                <option value="Funcionario Especifico"
                >Funcionario Especifico</option>
                <option value="Apoderado Especifico"
                >Apoderado Especifico</option>
            </Form.Select>

            {destinatario === 'Funcionario Especifico' ?
                <Funcionario funcionarios={store.funcionarios} /> : ''}
            { }
            { }
            { }
            { }
            { }
            { }
            { }

            {destinatario === '' ? '' :
                <> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuerpo del mensaje</Form.Label>
                    <Form.Control as="textarea" maxlength="160" rows={3} />
                    <hr />
                    {!destinatario.includes("Funcionario") ?
                        <>
                            <Form.Label> O puedes mandar un mensaje Prehecho</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setMotivo(e, 'motivo')}>
                                <option   >Seleccionar Motivo</option>
                                <option value='1'  >Taller</option>
                                <option value='2' >Matricula</option>
                                <option value='3' >Entrevista</option>
                            </Form.Select>
                            <hr />
                            <Form.Select aria-label="Default select example" onChange={(e) => setMotivo(e, 'idioma')}>
                                <option   >Seleccionar idioma</option>
                                <option value='creol'  >Creyol</option>
                                <option value='español' >Español</option>
                            </Form.Select>
                            <hr />
                        </>
                        : ''}
                </Form.Group>
                    <Button variant="primary" >Enviar Mensaje de Texto</Button></>
            }

        </Form>
    </>)
}

const Funcionario = ({ funcionarios }) => {
    return (
        <>
            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Completo</th>
                        <th>Tipo Funcionaria</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        funcionarios.map((element, key) => {
                            return (
                                <tr key={key}>
                                    <td><input type="checkbox" value="checkbox" /></td>
                                    <td>{element.nombreCompleto}</td>
                                    <td>{element.perfil}</td>
                                    <td>{element.numero}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

const Apoderado = () => {
    return (<>


    </>)
}

