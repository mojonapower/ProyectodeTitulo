import React, { useContext } from "react";
import { Recurso404 } from './404' //no se donde meterlo aun
import { Context } from "../store/appContext";
const Material = ({ nivel, tipoDoc, nombre }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="my-5 p-5 ">
      {/*arreglar el mapeo, optimizar */}
      <div className="list-group col-8">
        {store.documentos.map((objeto, index) => {

          if (objeto.nombre.includes(tipoDoc) || tipoDoc === 'todo') {
            return (
              <div key={index} className="list-group-item list-group-item-action d-flex gap-3 py-3 " aria-current="true">
                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{objeto.nombre}</h6>
                    <p className="mb-0 opacity-75"> Tipo de Documento: {objeto.categoria}</p>
                    <hr />
                    <small className=" text-info">{objeto.fecha}</small>
                  </div>
                  <div>
                    Nivel educativo: {objeto.nivel}
                    <p>Subido por : {objeto.propietario}</p>
                  </div>
                  <div>
                    <a href={objeto.url} target="blank" className="btn btn-outline-warning ">
                      <i className="fas fa-eye my-auto"></i>
                    </a >
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>
    </div>
  );
};

export default Material;
