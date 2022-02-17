import React, { useState } from 'react';
import { Row, Col, Tab, ListGroup } from 'react-bootstrap'
import logo from '../../../img/logo.png'
import nombre from '../../../img/iconos/texto.png'
import { Upload } from "../../component/upload"
import { AnounceCreator } from "../../component/crearAnuncio"

export const Admin = () => {
    return (<div className='container-fluid p-5'>

        <Sidebar />

    </div>)
}
const Sidebar = () => {

    return (
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
            <Row>
                <Col sm={4}>
                    <Row>
                        <Col sm={4}>
                            <img src={logo} width='100' />

                        </Col>
                        <Col >
                            <img src={nombre} width='350' className='mt-5' />
                        </Col>
                    </Row>
                    <ListGroup>
                        <ListGroup.Item action href="#link1" className='text-center'>
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
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                            En construccion
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                            <Contenido />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                            <Anuncios />
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                            Mensajes
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