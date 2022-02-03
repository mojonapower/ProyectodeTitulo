import React from "react";
import fondoValores from "../../../img/backgrounds/Valores.png";
import Card from "../card";

export const Valores = () => {
  /*{ texto, titulo, boton, variantBoton, img } */
  const valores = [
    {
      texto:
        "Parte desde el respeto por sí mismo hacia los otros y también por el entorno natural y cultural coherencia con los derechos y deberes humanos y otras formas de vida.",
      titulo: "Respeto",
      variantBoton: "warning",
      img: "https://cdn-icons-png.flaticon.com/512/3094/3094275.png",
    },
    {
      texto:
        "Buscamos trabajar juntos con nuestras habilidades y talentos: Equipos educativos, familias, niños, niñas y entes comunitarios, dónde el esfuerzo común que implica la colaboración nos acerque al concepto de sinergia nos enriquezca en las diferencias.",
      titulo: "Colaboración",
      variantBoton: "danger",
      img: "https://cdn-icons-png.flaticon.com/512/3094/3094309.png",
    },
    {
      texto:
        "Bucamos el reconocimiento y legitimación del “otro como un legítimo otro” con la posibilidad de experimentar sentimientos de goce, afectividad, diversión y alegría entre todos los miembros de la comunidad educativa.",
      titulo: "Buen Humor",
      variantBoton: "info",
      img: "https://cdn-icons-png.flaticon.com/512/4527/4527410.png",
    },
    {
      texto:
        "Bucamos el reconocimiento y legitimación del “otro como un legítimo otro” con la posibilidad de experimentar sentimientos de goce, afectividad, diversión y alegría entre todos los miembros de la comunidad educativa.",
      titulo: "Reconocimiento",
      variantBoton: "success",
      img: "https://cdn-icons-png.flaticon.com/512/1761/1761430.png",
    },
  ];
  return (
    <div
      style={{
        background: `url(${fondoValores})`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "space",
      }}
    >
      <div className="container m-auto">
        <div className="row " style={{ paddingTop: "450px" }}>
          {valores.map((obj, index) => (
            <div className="col">
              <Card
                texto={obj.texto}
                titulo={obj.titulo}
                variantBoton={obj.variantBoton}
                img={obj.img}
              />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
