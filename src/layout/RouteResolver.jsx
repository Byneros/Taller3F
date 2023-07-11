import React from 'react'; // Importa React
import { Routes, Route } from 'react-router-dom'; // Importa Routes yRoute de react - router - dom
import routes from '../config/routes'; // Importa las rutas de laconfiguración
import { Layout, theme } from "antd"; // Importa Layout y theme de AntDesign

const { Content } = Layout; // Extrae Content de Layout
const RouteResolver = () => {
    const { token: { colorBgContainer }, } = theme.useToken(); //Obtiene el color de fondo del token de tema
    return (
        <Content style={{ margin: '24px 16px 0' }}> // Crea un

            componente Content con un estilo específico

            <div style={{
                padding: 24, minHeight: 360, background:
                    colorBgContainer
            }}> // Crea un div con un estilo específico
                <Routes> // Envuelve las rutas en un componente

                    Routes

                    {routes.map((route) => (
                        <Route key={route.id} path={

                            route.path} element={<route.component />} /> // Mapea cada ruta a uncomponente Route con la ruta y el componente específico

                    ))}
                </Routes>
            </div>
        </Content>
    );
}