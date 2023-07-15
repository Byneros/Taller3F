// components/TasksList.jsx
import React, {useTasks} from 'react';

const ListarTarea = () => {
    const { data: tasks, isLoading, isError, error } = useTasks();

    if (isLoading) {
        return <span>Cargando...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.nombre}</h2>
                    <p>{task.descripcion}</p>
                    <p>{task.estado}</p>
                    <p>{task.fechalimite}</p>
                </div>
            ))}
        </div>
    );
};

export default ListarTarea;