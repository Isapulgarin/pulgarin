import avatar from "../assets/yo.png";
import "../Introduccion.css";

function Introduccion() {
    return (
      <section id="sobre-mi" className="seccion-introduccion">
            <div className="container">
                <div className="row align-items-center">

                  
                    <div className="col-md-6 avatar-container">
                        <img
                            src={avatar}
                            alt="Avatar de Isabella"
                            className="avatar"
                        />
                    </div>

                    <div className="col-md-6 introduccion-info">
                        <h2>Sobre mí</h2>

                        <p>
                            ¡Hola! Soy Isabella, tengo 17 años.
                            Me gradué de bachillerato con una técnica
                            en Programación de Software y actualmente
                            estoy cursando el tecnólogo en Análisis
                            y Desarrollo de Software (ADSO) en el SENA.
                        </p>

                        <p>
                            Me interesa aprender nuevas tecnologías,
                            desarrollar soluciones digitales y fortalecer
                            mis habilidades en programación. Me considero
                            una persona creativa, responsable y comprometida
                            con mi aprendizaje.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Introduccion;