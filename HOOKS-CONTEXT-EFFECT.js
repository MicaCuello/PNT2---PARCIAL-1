// En React, los hooks useContext y useEffect son herramientas poderosas que se usan para manejar el estado 
// y los efectos secundarios en componentes funcionales. Vamos a profundizar en ambos conceptos.

// ---------------- 1. useContext  ----------------
// El hook useContext se utiliza para acceder a valores proporcionados por un contexto en React, 
// lo que permite compartir datos entre componentes sin necesidad de pasar props manualmente por todos los 
// niveles del árbol de componentes.

// a)Estructura básica:
// •	Primero, debes crear un contexto utilizando React.createContext().
// •	Luego, usas useContext para acceder a los valores de ese contexto en los componentes.

import React, { createContext, useContext } from 'react';

// Creamos el contexto
const TemaContext = createContext();

// Un componente que utiliza el contexto
function MostrarTema() {
    const tema = useContext(TemaContext);
    return <p>El tema actual es: {tema}</p>;
}

// Componente principal que provee el contexto
function App() {
    return (
        <TemaContext.Provider value="oscuro">
            <MostrarTema />
        </TemaContext.Provider>
    );
}

export default App;

// Explicación:

//createContext: Crea un contexto que puede ser compartido entre componentes.
//useContext: Consume el valor del contexto ("oscuro") en el componente MostrarTema, sin necesidad
// de pasarlo como prop.


// ---------------- 2. useEffect ----------------
// El hook useEffect permite ejecutar efectos secundarios en componentes funcionales. 
// Los efectos secundarios son operaciones como:

// a) Llamadas a APIs
// b) Subscripciones a eventos
// c) Actualización del DOM
// d) Operaciones que ocurren después de que el componente se haya renderizado.
// 2) Estructura básica:


useEffect(() => {
    // Código que se ejecuta después del renderizado del componente

    return () => {
        // Código opcional de limpieza (cleanup)
    };
}, [dependencias]);  // Array de dependencias opcional

// El primer argumento es una función que se ejecutará después del renderizado.
// El segundo argumento es un array de dependencias. 
// Si alguna de las dependencias cambia, el efecto se ejecutará nuevamente.

// ---Ejemplo:
import React, { useState, useEffect } from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `Has hecho clic ${contador} veces`;

        return () => {
            console.log('Limpiando efectos anteriores');
        };
    }, [contador]);

    return (
        <div>
            <p>Has hecho clic {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>
                Aumentar contador
            </button>
        </div>
    );
}

export default Contador;

// Explicación:

// useEffect: Actualiza el título de la página (document.title) cada vez que cambia el valor de contador.
// El array de dependencias ([contador]) asegura que el efecto solo se ejecuta cuando cambia el valor
// del contador.

// La función de limpieza (cleanup) dentro del return se ejecuta antes de que el componente
// se actualice o se desmonte, útil para limpiar eventos, cancelar suscripciones, etc.


//---- Combinar useContext y useEffect ----
//A veces puedes usar ambos hooks juntos, como en un caso donde necesitas 
// consumir un contexto y realizar efectos secundarios basados en él.

// --Ejemplo combinado:

import React, { createContext, useContext, useState, useEffect } from 'react';

const UsuarioContext = createContext();

function MostrarUsuario() {
    const usuario = useContext(UsuarioContext);

    useEffect(() => {
        console.log(`Usuario actual: ${usuario}`);
        // Aquí podrías hacer una llamada a una API con el usuario

        return () => {
            console.log('Limpiando datos de usuario');
        };
    }, [usuario]);

    return <p>Usuario actual: {usuario}</p>;
}

function App() {
    const [usuario, setUsuario] = useState('Micaela');

    return (
        <UsuarioContext.Provider value={usuario}>
            <MostrarUsuario />
            <button onClick={() => setUsuario('Carlos')}>
                Cambiar usuario
            </button>
        </UsuarioContext.Provider>
    );
}

export default App;

// En este ejemplo:

// useContext : se utiliza para obtener el nombre del usuario actual.
// useEffect : actúa en función de cualquier cambio en el usuario, mostrando su nombre en la consola cuando cambia.

//Resumen:
//useContext te permite consumir valores de un contexto en React sin pasar props.
//useEffect es útil para manejar efectos secundarios como llamadas a APIs, actualización del DOM, y más.
// Los dos hooks pueden trabajar en conjunto para crear componentes reactivos y conectados a datos.