import "../Header.css";

function Header() {
    return (
        <header className="header-portfolio">
            <nav className="navbar navbar-expand-lg">
                <div className="container align-items-center">

                    <div className="brand-info">
                        <a className="brand-name" href="#inicio">
                            Isabella Pulgarín Rúa
                        </a>

                        <div className="brand-contact">
                            <span>
                                <i className="bi bi-envelope-fill"></i>
                                ipulgarinrua@gmail.com
                            </span>

                            <span>
                                <i className="bi bi-telephone-fill"></i>
                                +57 3182346729
                            </span>
                        </div>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Abrir menú"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            <li className="nav-item">
                                <a className="nav-link" href="#sobre-mi">
                                    Sobre mí
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#habilidades">
                                    Habilidades
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#proyectos">
                                    Proyectos
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#recomendaciones">
                                    Recomendaciones
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Header;