import { Layout, Menu } from 'antd';
import routes from '@config/routes'; // Importa las rutas de laconfiguración
import React from "react"; // Importa React
import { Link } from "react-router-dom"; // Importa Link dereact-router-dom para navegar a las rutas
const { Sider } = Layout; // Extrae Sider de Layout
const NavigationMenu = () => (
    <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed,
                type);
        }}
    >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {routes.map((item) => (

                <Menu.Item key={item.id} icon={<item.icon />}>
                    <Link to={item.path}>{item.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    </Sider>
);
export default NavigationMenu;