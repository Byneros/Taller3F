
import { PlusCircleOutlined, UserOutlined, UnorderedListOutlined } from
    "@ant-design/icons";
import ListarTareas from '../components/docentes/ListarTareas';
import CrearTareas from '../components/docentes/CrearTareas';
const routes = [
    {
        path: '/crear',
        component: CrearTareas,
        title: 'Crear Tareas',
        icon: PlusCircleOutlined
    },
    {
        path: '/listar',
        component: ListarTareas,
        title: 'Listar Tareas',
        icon: UnorderedListOutlined
    },
    {
        path: '*',

        component: () => null,
        title: 'Inicio',
        icon: UserOutlined
    }
];
export default routes;
