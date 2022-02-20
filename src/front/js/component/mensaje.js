import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../store/appContext";
import { Table, Form, Button, Row, Col, Card } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Mensaje = () => {
    const { store, actions } = useContext(Context);

    const [destinatario, setDestinatario] = useState('')
    const [cuerpo, setCuerpo] = useState('')
    const [prefix, setPrefix] = useState({
        idioma: '',
        nombreTaller: '',
        ubicacion: '',
        hora: '',
        persona: '',
        plataforma: '',
        fecha: '',
        opcion: 0
    });
    const [opcion, setopcion] = useState(1)
    const setMotivo = (e, tipo) => {
        console.log('dentro')
        let pre = prefix;
        if (tipo === 'motivo') {
            pre.opcion = Number(e.target.value)
            setopcion(Number(e.target.value))
        }
        else if (tipo === 'idioma') {
            pre.idioma = e.target.value
        }

        setPrefix(pre)
        console.log(prefix)
    }
    useEffect(() => {
        console.log("current variables")
        console.log("opcion de mensaje personalizado", opcion)
        console.log("mensaje completo estructura", prefix)
        console.log("mensaje completo", cuerpo)

    }, [prefix, cuerpo, destinatario, opcion])
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
            {destinatario === 'Apoderado Especifico' ?
                <Apoderado apoderado={store.apoderado} /> : ''}
            { }
            { }
            { }
            { }
            { }
            { }

            {destinatario === '' ? '' :
                <> <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Cuerpo del mensaje</Form.Label>

                    <textarea value={cuerpo} class="form-control" id="exampleFormControlTextarea1" maxLength="160" rows="3" onChange={e => {

                        setCuerpo(e.target.value)

                    }} />
                    <button className='btn btn-warning mt-3 text-white' onClick={() => {
                        let objeto = {
                            cuerpo: cuerpo,
                            destinatario: destinatario
                        }
                        actions.sendSMSmasivo(objeto)

                    }}>

                        Enviar mensaje de texto
                    </button>
                    <hr />
                    {!destinatario.includes("Funcionario") ?
                        <>

                            <Form.Label> O puedes mandar un mensaje Prehecho</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={(e) => setMotivo(e, 'motivo')}>
                                <option value='1'  >Seleccionar Motivo</option>
                                <option value='1' >Taller</option>
                                <option value='2' >Matricula</option>
                                <option value='3' >Entrevista</option>
                            </Form.Select>
                            <hr />
                            <Form.Select aria-label="Default select example" onChange={(e) => setMotivo(e, 'idioma')}>
                                <option value='español'  >Seleccionar idioma</option>
                                <option value='creol'  >Creole</option>
                                <option value='español' >Español</option>
                            </Form.Select>
                            <hr />
                            <Row>
                                <Col sm={6}>
                                    {prefix.opcion == 1 ? <>
                                        <LlenarTaller setPrefix={setPrefix} prefix={prefix} />
                                        <button className='btn btn-success' onClick={() => {
                                            setCuerpo(actions.prefixMessage(prefix))
                                        }}>Generar Sms</button>
                                    </> : ''}
                                    {prefix.opcion == 2 ? <>
                                        <LlenarMatricula setPrefix={setPrefix} prefix={prefix} />
                                        <button className='btn btn-success' onClick={() => {
                                            setCuerpo(actions.prefixMessage(prefix))
                                        }}>Generar Sms</button>
                                    </> : ''}
                                    {prefix.opcion == 3 ? <>
                                        <LlenarEntrevista setPrefix={setPrefix} prefix={prefix} />
                                        <button className='btn btn-success' onClick={() => {
                                            setCuerpo(actions.prefixMessage(prefix))
                                        }}>Generar Sms</button>
                                    </> : ''}


                                </Col>
                                <Col>
                                    <Card className='p-3 text-center'>

                                        <Card.Header>Ejemplo de SMS</Card.Header>
                                        <Form.Label> En Español</Form.Label>
                                        <div className="alert alert-info" role="alert">
                                            {store.prefixsms[opcion - 1].español}
                                        </div>

                                        <Form.Label> En Creol</Form.Label>
                                        <div className="alert alert-warning" role="alert">
                                            {store.prefixsms[opcion - 1].creol}
                                        </div>
                                        <p className='text-danger'>*La longitud del mensaje es de corta extensión. No supera los 160 caracteres*</p>
                                    </Card>

                                </Col>

                            </Row>

                        </>

                        : ''}
                    <Card.Footer className="text-muted mb-0">


                    </Card.Footer>

                </Form.Group>
                </>
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

const Apoderado = ({ apoderado }) => {
    return (<>
        <Table striped bordered hover className='mt-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre Completo</th>
                    <th>Nivel</th>
                    <th>Número</th>
                    <th>Pupilo</th>

                </tr>
            </thead>
            <tbody>
                {
                    apoderado.map((element, key) => {
                        return (
                            <tr key={key}>
                                <td><input type="checkbox" value="checkbox" /></td>
                                <td>{element.nombreCompleto}</td>
                                <td>{element.nivel}</td>
                                <td>{element.numero}</td>
                                <td>{element.pupilo}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>

    </>)
}
const LlenarTaller = ({ setPrefix, prefix }) => {

    return (
        <Card className='mx-5 text-center mb-5'>
            <Card.Header> Campos a llenar</Card.Header>
            <Form.Group >

                <Row>
                    <Col>
                        <Form.Label>Nombre de Taller</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del taller" onChange={(e) => {
                            let form = prefix;
                            form.nombreTaller = e.target.value
                            setPrefix(form)

                        }} />
                    </Col>
                    <Col>

                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control type="text" placeholder="Dirección" onChange={(e) => {
                            let form = prefix;
                            form.ubicacion = e.target.value
                            setPrefix(form)

                        }} />
                    </Col>

                </Row>
                <Row>
                    <Col >
                        <Form.Label>Hora</Form.Label>
                        <input type="text" class="form-control" placeholder="ej: 14:30" onChange={(e) => {
                            let form = prefix;
                            form.hora = e.target.value
                            setPrefix(form)
                        }} />
                    </Col>
                </Row>
            </Form.Group>
        </Card>
    )
}

const LlenarMatricula = ({ setPrefix, prefix }) => {
    return (
        <Card className='mx-5 text-center mb-5'>
            <Card.Header> Campos a llenar</Card.Header>
            <Form.Group >
                <Row>
                    <Col>
                        <Form.Label>Nombre de Persona</Form.Label>
                        <Form.Control type="text" placeholder="Nombre Apellido" onChange={(e) => {
                            let form = prefix;
                            form.persona = e.target.value
                            setPrefix(form)

                        }} />
                    </Col>

                </Row>

            </Form.Group>
        </Card>
    )
}
const LlenarEntrevista = ({ setPrefix, prefix }) => {
    //datepicker
    const [startDate, setStartDate] = useState(new Date());

    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
    };
    //end datepicker
    return (
        <Card className='mx-5 text-center mb-5'>
            <Card.Header> Campos a llenar</Card.Header>
            <Form.Group >

                <Row>
                    <Col >
                        <Form.Label>Fecha</Form.Label>
                        <DatePicker selected={startDate} onChange={(date) => {
                            setStartDate(date)
                            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                            let form = prefix
                            form.fecha = startDate.toLocaleDateString("es-ES", options);
                            setPrefix(form)

                        }} />
                    </Col>
                    <Col>
                        <Form.Label>Plataforma</Form.Label>
                        <Form.Control type="text" placeholder="Nombre del taller" onChange={(e) => {
                            let form = prefix;
                            form.plataforma = e.target.value
                            setPrefix(form)
                        }} />
                    </Col>
                </Row>
            </Form.Group>
        </Card>
    )
}
