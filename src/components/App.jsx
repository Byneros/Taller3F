// Importamos la biblioteca React desde el módulo 'react'
// Esto es necesario para escribir componentes en JSX y manejar su renderizado y actualización
import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


// Declaramos una constante llamada `App`. Esta constante es una función de flecha que no recibe ningún argumento.
// Las funciones de flecha son una forma concisa de declarar funciones en JavaScript.
const App = () => {

    // La función `App` retorna JSX. En este caso, el JSX es un elemento h1 con el texto "Hola Mundo!".
    // Este JSX es lo que se renderizará en la pantalla cuando utilicemos este componente.
    return (
        <div>
            <Button type="primary" icon={<PlusOutlined />}>
                Agregar
            </Button>
        </div>
    );
}
// Exportamos el componente `App` como exportación por defecto de este módulo.
// Esto significa que otros módulos que importen este archivo obtendrán el componente `App` por defecto.
export default App;