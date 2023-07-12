import React from 'react'; // Importa React
import { Routes, Route } from 'react-router-dom'; // Importa Routes yRoute de react - router - dom
import routes from '../config/routes'; // Importa las rutas de laconfiguración
import { Layout, theme } from "antd"; // Importa Layout y theme de AntDesign

const { Content } = Layout;
//next.js
const RouteResolver = () => {
    const { token: { colorBgContainer }, } = theme.useToken(); 
    return (
        <Content style={{ margin: '24px 16px 0' }}>

            <div style={{
                padding: 24, minHeight: 360, background:
                    colorBgContainer
            }}>
                <Routes>

                    {routes.map((route) => (
                        <Route key={route.id} path={route.path} element={<route.component />} /> 
                    ))}
                </Routes>
            </div>
        </Content>
    );
};
export default RouteResolver;