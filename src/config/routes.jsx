
import { PlusCircleOutlined, UserOutlined, UnorderedListOutlined, EditOutlined, DeleteOutlined } from
    "@ant-design/icons";
import CrearTareas from '../components/docentes/CrearTareas';
import ModificarTareas from '../components/docentes/ModificarTareas';
import ListarTareas from '../components/docentes/ListarTareas';
const routes = [
    {
        path: '/crear',
        component: CrearTareas,
        title: 'Crear Tareas',
        icon: PlusCircleOutlined
    },
    {
        path: '/modifcar',
        component: ModificarTareas,
        title: 'Modificar Tareas',
        icon: EditOutlined
    },
    {
        path: '/ListarTareas',
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
