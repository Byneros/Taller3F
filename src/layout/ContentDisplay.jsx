import React from 'react'; // Importa React
import { Layout } from 'antd'; // Importa Layout de Ant Design
import NavigationMenu from './NavigationMenu'; // Importa el componente personalizado NavigationMenu
import RouteResolver from './RouteResolver'; // Importa el componente personalizado RouteResolver
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter de react-router-dom
const ContentDisplay = () => (
    <Layout> 
        <Router> 
            <NavigationMenu /> 
            <RouteResolver /> 
        </Router>
    </Layout>
);
export default ContentDisplay;