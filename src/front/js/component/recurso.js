import React from "react";

const Material = ({ categoria }) => {
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
      <div className="">
        {documentos.map((objeto, index) => {
          return (
            <div key={index} className="card col-6">
              <div className="row">
                <div className="col-3">
                  <img
                    className="w-50"
                    src="https://cdn-icons.flaticon.com/png/512/6194/premium/6194617.png?token=exp=1643667744~hmac=f1a3be1e78a00c0bab88c658915f711d"
                  />
                </div>

                <div className="col">
                  <h2>{objeto.nombre}</h2>
                  <p> Categoria: {objeto.tipo}</p>
                  <a
                    href={objeto.url}
                    className="btn btn-success"
                    target="_blank"
                  >
                    {" "}
                    Ir al Recurso
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Material;
