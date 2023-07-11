import { Layout, Menu } from 'antd'; // Importa Layout y Menu de AntDesign
import routes from '@config/routes'; // Importa las rutas de laconfiguración
import React from "react"; // Importa React
import { Link } from "react-router-dom"; // Importa Link dereact-router-dom para navegar a las rutas
const { Sider } = Layout; // Extrae Sider de Layout
const NavigationMenu = () => (
    <Sider // Crea un componente Sider para la barra lateral
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
            {routes.map((item) => ( // Mapea las rutas a loselementos del menú

                <Menu.Item key={item.id} icon={<item.icon />}>
                    <Link to={item.path}>{item.title}</Link> // Crea

                    un enlace a cada ruta

                </Menu.Item>
            ))}
        </Menu>
    </Sider>
);