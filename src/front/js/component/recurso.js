import React from "react";

const Material = ({ filtro, tipoDoc }) => {
  let documentos = [
    {

      tipo: "Referente Curricular",
      nombre: " Referente Curricular",
      url: "https://www.integra.cl/wp-content/uploads/2019/09/REFERENTE_CURRICULAR_202019_compressed.pdf",
    },
    {
      tipo: "Material Educativo",
      nombre: "Catalogo Materiales Educativos",
      url: "https://www.integra.cl/wp-content/files_mf/1604500017OK_Catalogo_materiales_Cedoc_octubre_2020_VF.pdf",
    },
    {
      tipo: "Material",
      nombre: "Más Sanos, Más seguros",
      url: "https://www.integra.cl/wp-content/files_mf/1583506007INTEGRA_MasSanosySeguros_baja1.pdf",
    },
  ];
  return (
    <div className="my-5 p-5 ">

      <div className="list-group col">
        {documentos.map((objeto, index) => {
          if (tipoDoc != 'todo') {
            if (tipoDoc === objeto.tipo) {
              return (
                <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                  <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                  <div className="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 className="mb-0">{objeto.nombre}</h6>
                      <p className="mb-0 opacity-75">{objeto.tipo}</p>
                    </div>
                    <a href={objeto.url} target="blank" className="btn btn-outline-warning ">
                      <i className="fas fa-eye"></i>
                    </a >
                  </div>
                </div>
              );
            }
          }
          else {
            return (
              <div className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">{objeto.nombre}</h6>
                    <p className="mb-0 opacity-75">{objeto.tipo}</p>
                  </div>
                  <a href={objeto.url} target="blank" className="btn btn-outline-warning ">
                    <i className="fas fa-eye"></i>
                  </a >
                </div>
              </div>
            );
          }


        })}
      </div>
    </div>
  );
};

export default Material;
