import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import "../FormularioRecomendaciones.css";

function FormularioRecomendaciones({ agregarRecomendacion }) {

    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [correo, setCorreo] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();

        const nuevaRecomendacion = {
            nombre,
            cargo,
            correo,
            descripcion
        };

        agregarRecomendacion(nuevaRecomendacion);

       
        setNombre("");
        setCargo("");
        setCorreo("");
        setDescripcion("");

        alert("¡Tu recomendación fue agregada correctamente!");
    };

    return (
        <section className="seccion-formulario-recomendaciones">
            <div className="container">

                <div className="formulario-encabezado">
                    <span>COMPARTE TU EXPERIENCIA</span>

                    <h2>Déjame una recomendación</h2>

                    <p>
                        Tu opinión es importante para mi crecimiento
                        personal y profesional.
                    </p>
                </div>

                <div className="formulario-recomendacion-card">

                    <Form onSubmit={manejarEnvio}>

                        <Form.Group className="mb-3">
                            <Form.Label>Nombre completo</Form.Label>

                            <Form.Control
                                type="text"
                                placeholder="Escribe tu nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Cargo o relación</Form.Label>

                            <Form.Select
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                                required
                            >
                                <option value="">Selecciona una opción</option>
                                <option value="Instructor">Instructor</option>
                                <option value="Docente">Docente</option>
                                <option value="Compañero">Compañero</option>
                                <option value="Otro">Otro</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Correo electrónico</Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="ejemplo@correo.com"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Tu recomendación</Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Escribe aquí tu recomendación..."
                                maxLength={500}
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="boton-recomendacion"
                        >
                            <i className="bi bi-send-fill me-2"></i>
                            Enviar recomendación
                        </Button>

                    </Form>

                </div>
            </div>
        </section>
    );
}

export default FormularioRecomendaciones;