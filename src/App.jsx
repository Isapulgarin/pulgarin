import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./componentes/header.jsx";
import Introduccion from "./componentes/Introduccion.jsx";
import Habilidades from "./componentes/Habilidades.jsx";
import Proyectos from "./componentes/Proyectos.jsx";
import Recomendaciones from "./componentes/Recomendaciones.jsx";
import FormularioRecomendaciones from "./componentes/FormularioRecomendaciones.jsx";
import Footer from "./componentes/Footer.jsx";

function App() {

    const [recomendaciones, setRecomendaciones] = useState(() => {
        const guardadas = localStorage.getItem("recomendaciones");

        return guardadas ? JSON.parse(guardadas) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "recomendaciones",
            JSON.stringify(recomendaciones)
        );
    }, [recomendaciones]);

    const agregarRecomendacion = (nuevaRecomendacion) => {
        setRecomendaciones((anteriores) => [
            ...anteriores,
            {
                ...nuevaRecomendacion,
                id: Date.now()
            }
        ]);
    };

    return (
        <>
            <Header />
            <Introduccion />
            <Habilidades />
            <Proyectos />

            <Recomendaciones recomendaciones={recomendaciones} />

            <FormularioRecomendaciones
                agregarRecomendacion={agregarRecomendacion}
            />

            <Footer/>
        </>
    );
}

export default App;