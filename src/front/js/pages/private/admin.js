import React, { useState } from 'react';
import { Row, Col, Tab, ListGroup, Figure } from 'react-bootstrap'
import logo from '../../../img/logo.png'
import construccion from '../../../img/construccion.png'
import nombre from '../../../img/iconos/texto.png'
import { Upload } from "../../component/upload"
import { AnounceCreator } from "../../component/crearAnuncio"
import { Mensaje } from "../../component/mensaje"
import { Link } from 'react-router-dom'

export const Admin = () => {
    return (<div className='container-fluid p-5'>
        <Link to='/'>
            <button className='btn btn-warning text-white'><i class="fa-solid fa-circle-arrow-left"></i> Volver </button>
        </Link>
        <Sidebar />
    </div>)
}
const Sidebar = () => {

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1"  >
            <Row>

                <Col sm={3}>
                    <Row>

                        <img className='me' src={logo} width='100' />

                    </Row>
                    <Row>
                        <img src={nombre} width='350' className='mt-5' />
                    </Row>
                    <ListGroup>
                        <ListGroup.Item action href="#link1" className='text-center' >
                            Resumen
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2" className='text-center'>
                            Contenido
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" className='text-center'>
                            Anuncios
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4" className='text-center'>
                            Mensajes
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5" className='text-center'>
                            Miembros
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col >
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            <img src={construccion}></img>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <div className='container my-5'>
                                <Contenido />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <div className='container my-5'>
                                <Anuncios />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                            <div className='container my-5'>
                                <Mensajes />
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                            Miembros
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
const Contenido = () => {
    return (
        <Upload />
    )

}
const Anuncios = () => {
    return (
        <AnounceCreator />
    )

}
const Mensajes = () => {
    return (
        <div className='my-auto'>

            <Mensaje />
        </div>
    )

}