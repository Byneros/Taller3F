// Importamos la biblioteca React desde el módulo 'react'
// Esto es necesario para escribir componentes en JSX y manejar su renderizado y actualización.
import '../styles/global.scss';
import React from 'react';
// Importamos ReactDOM desde el módulo 'react-dom'
// ReactDOM proporciona métodos específicos del DOM que pueden ser utilizados en la raíz de la aplicación.
import ReactDOM from 'react-dom';
//Importamos el modulo app para que el componente App esté disponible para su uso aquí.
import App from '../components/App/App';
// Utilizamos ReactDOM.render() para renderizar el componente <App /> en un elemento del DOM con el id 'app'.
// El primer argumento es el componente de React que queremos renderizar y el segundo argumento es el elemento del DOM donde queremos renderizar el componente.
// Aquí, asumimos que ya hay un elemento con el id 'app' en el HTML de la página.
ReactDOM.render(<App />, document.getElementById('app'));