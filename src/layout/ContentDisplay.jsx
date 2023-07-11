import React from 'react'; // Importa React
import {Layout} from 'antd'; // Importa Layout de Ant Design
import NavigationMenu from './NavigationMenu'; // Importa el componente personalizado NavigationMenu
import RouteResolver from './RouteResolver'; // Importa el componente personalizado RouteResolver
import { BrowserRouter as Router} from 'react-router-dom'; // Importa BrowserRouter de react-router-dom
const ContentDisplay = () => (
<Layout> // Envuelve todo en un componente de Layout
<Router> // Envuelve los componentes en un Router para

habilitar la navegación

<NavigationMenu/> // Inserta la barra de navegación
<RouteResolver/> // Inserta el componente que resolverá

las rutas

</Router>
</Layout>

);