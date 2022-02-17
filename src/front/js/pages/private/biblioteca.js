import React, { useState, useEffect, useContext } from "react";
import Material from "../../component/recurso";
import biblioteca from "../../../img/backgrounds/recursos.png";
import { Button, Modal } from "react-bootstrap";
import { Upload } from "../../component/upload"
import { Context } from "../../store/appContext";

const Biblioteca = () => {

  const { store, actions } = useContext(Context);

  const [documento, setDocumento] = useState('todo') //tipo documento
  const [nivel, setNivel] = useState([]) //nivel educativo
  const [nombre, setNombre] = useState('')// nombre del documento

  const [url, setUrl] = useState(''); //url del documento subido desde el componente UPLOAD
  //modal



  //variables de estado de formulario dentro del componente Upload
  const [formulario, setFormulario] = useState({
    categoria: '',
    nivel: [],
    nombre: "",
    propietario: 'Daniela Millán',
    url: "",
  })


  useEffect(() => {
    console.log(documento, nivel, nombre)
    if (documento === '') {
      setDocumento('todo')
    }
  }, [documento, nivel, nombre])
  return (
    <>
      <>
        <div className="container-fluid" style={{
          background: `url(${biblioteca})`,
          paddingTop: "150px",
          backgroundRepeat: "no-repeat",
        }}>

          <div className="row d-flex justify-content-end my-5 mx-5">
            <p className=" col-6  my-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="row">


            </div>
          </div>


          <div className="container-fluid mt-5">
            <div className="row my-5">
              <div className="col-5 my-5 ms-5  ">
                <Filtros
                  nivel={nivel} setNivel={setNivel} setDocumento={setDocumento} setNombre={setNombre} nombre={nombre}
                />
              </div>
              <div className="col my-5">
                <Material nivel={nivel} tipoDoc={documento} nombre={nombre} />
              </div>

            </div>
          </div>
        </div>

      </>
    </>
  );
};

//filtros terminados
const Filtros = ({ nivel, setNivel, setDocumento, setNombre, nombre }) => {

  function eliminarNivel(borrar) {
    let result = []
    nivel.map((el) => { el != borrar ? result.push(el) : '' })
    return result;
  }

  return (
    <>
      <div className="row my-5">
        <form>
          <div class="row my-5 mb-3">
            <label for="inputEmail3" class="col-sm col-form-label">Buscar por nombre</label>
            <div class="col-sm-7">
              <input type="email" class="form-control " id="inputEmail3" onChange={(e) => { setDocumento(e.target.value) }} />
            </div>

          </div>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm pt-0">Nivel educativo</legend>
            <div class="col-sm-7">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="salaCuna"

                  onChange={(e) => {
                    nivel.includes(e.target.value) ?
                      setNivel(eliminarNivel(e.target.value)) : setNivel([...nivel, e.target.value])
                  }}

                />
                <label class="form-check-label" for="gridRadios1" >
                  Sala Cuna
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="salaCunaMayor"

                  onChange={(e) => {
                    nivel.includes(e.target.value) ?
                      setNivel(eliminarNivel(e.target.value)) : setNivel([...nivel, e.target.value])
                  }}

                />
                <label class="form-check-label" for="gridRadios1">
                  Sala Cuna Mayor
                </label>
              </div>
              <div class="form-check">{/*HACER UN MAP DE ESTO */}
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medioMenor"
                  onChange={(e) => {
                    nivel.includes(e.target.value) ?
                      setNivel(eliminarNivel(e.target.value)) : setNivel([...nivel, e.target.value])
                  }}


                />
                <label class="form-check-label" for="gridRadios1">
                  Medio Menor
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medios"
                  onChange={(e) => {
                    nivel.includes(e.target.value) ?
                      setNivel(eliminarNivel(e.target.value)) : setNivel([...nivel, e.target.value])
                  }} />
                <label class="form-check-label" for="gridRadios1">
                  Medios
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="medioMayor" onChange={(e) => {
                  nivel.includes(e.target.value) ?
                    setNivel(eliminarNivel(e.target.value)) : setNivel([...nivel, e.target.value])
                }} />
                <label class="form-check-label" for="gridRadios1">
                  Medio Mayor
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset class="row mb"> {/*HACER UN MAP DE ESTO */}
            <legend class="col-form-label col-sm pt-0">Tipo de Documento</legend>
            <div class="col-sm-7">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="cuentos"

                  onChange={(e) => {
                    nombre.includes(e.target.value) ?
                      setNombre(eliminarNivel(e.target.value)) : setNombre([...nombre, e.target.value])
                  }} />
                <label class="form-check-label" for="gridRadios1">
                  Cuentos
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="planificaciones"

                  onChange={(e) => {
                    nombre.includes(e.target.value) ?
                      setNombre(eliminarNivel(e.target.value)) : setNombre([...nombre, e.target.value])
                  }}
                />
                <label class="form-check-label" for="gridRadios1">
                  Planificaciones
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="referenteCurricular"

                  onChange={(e) => {
                    nombre.includes(e.target.value) ?
                      setNombre(eliminarNivel(e.target.value)) : setNombre([...nombre, e.target.value])
                  }} />
                <label class="form-check-label" for="gridRadios1">
                  Referente Curricular
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" name="gridRadios" id="gridRadios1" value="materialEducativo"
                  onChange={(e) => {
                    nombre.includes(e.target.value) ?
                      setNombre(eliminarNivel(e.target.value)) : setNombre([...nombre, e.target.value])
                  }} />
                <label class="form-check-label" for="gridRadios1">
                  Material Educativo
                </label>
              </div>
            </div>
          </fieldset>
        </form>
      </div>

    </>
  )
}

export default Biblioteca;
