import React from 'react';
import { useTasks } from '../../services/useTask';
import { Table } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';

const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'Descripción',
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
    {
      title: 'Fecha Límite',
      dataIndex: 'fechaLimite',
      key: 'fechalimite',
    },
  ];
  

const queryClient = new QueryClient();
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
      <Table dataSource={tasks} columns={columns} />
    </div>
  );
};


const ListarTareas = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListarTarea />
    </QueryClientProvider>
  );
};


export default ListarTareas;
