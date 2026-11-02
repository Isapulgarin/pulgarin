import "../Habilidades.css";

function Cardhabilidades({ imagen, nombre, descripcion }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card tarjeta-habilidad">
                <div className="card-body">

                    <img
                        src={imagen}
                        className="card-img"
                        alt={nombre}
                    />

                    <h5 className="mt-2 mb-0">{nombre}</h5>

                    <p className="card-text">
                        {descripcion}
                    </p>

                </div>
            </div>
        </div>
    );
}

function Habilidades() {
    return (
       <section id="habilidades" className="habilidades">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2>Habilidades</h2>
                    </div>

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        nombre="HTML"
                        descripcion="Conocimientos en estructura de páginas web. 2 años."
                    />

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        nombre="CSS"
                        descripcion="Conocimientos en diseño y estilos web. 2 años."
                    />

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        nombre="JavaScript"
                        descripcion="Conocimientos en programación e interactividad. 6 meses."
                    />

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        nombre="React"
                        descripcion="Desarrollo de interfaces mediante componentes. 2 semanas."
                    />

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        nombre="Python"
                        descripcion="Conocimientos en lógica y programación. 6 meses."
                    />

                    <Cardhabilidades
                        imagen="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                        nombre="PHP"
                        descripcion="Desarrollo web del lado del servidor. 2 años."
                    />

                </div>
            </div>
        </section>
    );
}

export default Habilidades;