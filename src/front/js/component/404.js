import React from 'react';
import noresults from '../../img/iconos/sinresultados.png'
import notFound from '../../img/iconos/404.png'

export const Recurso404 = () => (
    <div >

        <img src={noresults}></img>
    </div>)
export const Pagina404 = () => (
    <div className=' mt-5 d-flex justify-content-center'>
        <img className='my-5 p-5' src={notFound}></img>
    </div>)
