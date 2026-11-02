import "../Recomendaciones.css";

function CardRecomendaciones({ nombre, cargo, descripcion, numero }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="recomendacion-card">

                <div className="recomendacion-numero">
                    RECOMENDACIÓN {String(numero).padStart(2, "0")}
                </div>

                <div className="recomendacion-contenido">

                    <div className="recomendacion-icono">
                        <i className="bi bi-chat-quote-fill"></i>
                    </div>

                    <h5>{nombre}</h5>

                    <span className="recomendacion-cargo">
                        {cargo}
                    </span>

                    <p>{descripcion}</p>

                </div>
            </div>
        </div>
    );
}

function Recomendaciones({ recomendaciones = [] }) {
    return (
       <section id="recomendaciones" className="seccion-recomendaciones">
            <div className="container">

                <div className="recomendaciones-encabezado">
                    <span className="recomendaciones-subtitulo">
                        EXPERIENCIAS Y OPINIONES
                    </span>

                    <h2>Recomendaciones</h2>

                    <p>
                        Opiniones sobre mi proceso de aprendizaje y trabajo.
                    </p>
                </div>

                <div className="row">

                    {recomendaciones.length > 0 ? (

                        recomendaciones.map((recomendacion, index) => (
                            <CardRecomendaciones
                                key={recomendacion.id}
                                numero={index + 1}
                                nombre={recomendacion.nombre}
                                cargo={recomendacion.cargo}
                                descripcion={recomendacion.descripcion}
                            />
                        ))

                    ) : (

                        <div className="col-12 text-center">
                            <p>
                                Todavía no hay recomendaciones. ¡Sé la primera persona en dejar una!
                            </p>
                        </div>

                    )}

                </div>
            </div>
        </section>
    );
}

export default Recomendaciones;