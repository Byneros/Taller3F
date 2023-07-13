
import { PlusCircleOutlined, UserOutlined, UnorderedListOutlined } from
    "@ant-design/icons";
import ListarDocentes from '../components/docentes/ListarDocentes';
import CrearTareas from '../components/docentes/CrearTareas';
const routes = [
    {
        path: '/crear',
        component: CrearTareas,
        title: 'Crear Docentes',
        icon: PlusCircleOutlined
    },
    {
        path: '/listar',
        component: ListarDocentes,
        title: 'Listar Docentes',
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