
import "../Proyectos.css";

function CardProyectos({ nombre, descripcion, numero }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="proyecto-card">

                <div className="proyecto-numero">
                    PROYECTO 0{numero}
                </div>

                <div className="proyecto-contenido">
                    <h5>{nombre}</h5>

                    <p>{descripcion}</p>

                    <span className="proyecto-etiqueta">
                        Desarrollo de software
                    </span>
                </div>

            </div>
        </div>
    );
}

function Proyectos() {
    return (
      <section id="proyectos" className="seccion-proyectos">
            <div className="container">

                <div className="proyectos-encabezado">
                    <span className="proyectos-subtitulo">
                        MI TRABAJO
                    </span>

                    <h2>Mis proyectos</h2>

                    <p>
                        Algunos de los proyectos que he desarrollado
                        durante mi proceso de aprendizaje.
                    </p>
                </div>

                <div className="row">

                    <CardProyectos
                        numero="1"
                        nombre="ESCARLATA"
                        descripcion="Proyecto de grado del colegio. Consiste en una tienda virtual de accesorios."
                    />

                    <CardProyectos
                        numero="2"
                        nombre="RecurSoft"
                        descripcion="Sistema de gestión de recursos institucionales que permite controlar préstamos, devoluciones y mantenimiento."
                    />

                    <CardProyectos
                        numero="3"
                        nombre="Inventa"
                        descripcion="Proyecto a futuro  enfocado en la gestión y el control de inventarios."
                    />

                </div>
            </div>
        </section>
    );
}

export default Proyectos;
