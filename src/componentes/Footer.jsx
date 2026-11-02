import Button from "react-bootstrap/Button";
import "../Footer.css";

function Footer() {

    const volverArriba = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-portafolio">

            <div className="container text-center">
                <h5>Isabella Pulgarín</h5>

                <p>
                    Desarrolladora de software en formación | ADSO - SENA
                </p>

                <div className="footer-redes">
                    <a href="#" aria-label="GitHub">
                        <i className="bi bi-github"></i>
                    </a>

                    <a href="#" aria-label="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                    </a>
                </div>

                <div className="footer-final">
                    <p>© 2026 Isabella Pulgarín. Todos los derechos reservados.</p>
                </div>
            </div>

            <Button
                className="boton-scroll-top"
                onClick={volverArriba}
                aria-label="Volver al inicio"
                title="Volver arriba"
            >
                <i className="bi bi-arrow-up"></i>
            </Button>

        </footer>
    );
}

export default Footer;