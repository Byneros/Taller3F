import React from 'react';
import { useTasks } from '../../services/useTask';

const ListarTarea = () => {
    const { data: tasks, isLoading, isError, error } = useTasks();

    if (isLoading) {
        return <span> Cargando...</span>;
    }

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <h2>Lista de Tareas</h2>
            {tasks.map((task) => (
                <div key={task._id}>
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