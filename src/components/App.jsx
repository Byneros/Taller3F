// Importamos la biblioteca React desde el módulo 'react'
// Esto es necesario para escribir componentes en JSX y manejar su renderizado y actualización
import React from 'react';
import '@styles/global.scss';
import { Layout, theme } from 'antd';
import ContentDisplay from '@layout/ContentDisplay';

const { Header, Content, Footer } = Layout;


const App = () =>  {
    const { token: { colorBgContainer } } = theme.useToken();

    return (
        <Layout> 
            <Header style={{
                padding: 0, background: colorBgContainer

            }} /> 

            <ContentDisplay /> 

            <Footer style={{ textAlign: 'center' }}>
                2023
            </Footer>
        </Layout>
    );
}
// Exportamos el componente `App` como exportación por defecto de este módulo.
// Esto significa que otros módulos que importen este archivo obtendrán el componente `App` por defecto.
export default App;