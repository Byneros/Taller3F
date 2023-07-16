import { useMutation, useQuery } from 'react-query';
import HttpTaskClient from '@services/HttpTaskClient';

const taskClient = new HttpTaskClient();

const useCreateTask = () => {
    return useMutation(values => taskClient.createTask(values));
}

const getTasks = async () => {
    return await taskClient.getTasks();
}

export const useTasks = () => {
    return useQuery('tasks', getTasks);
  };
  
const getTask = async (id) => {
    return await  taskClient.getTask(id);
}

  export const useTask = (id) => {
    return useQuery(['task', id], () => getTask(id)); // Utilizar el ID como parte de la clave de consulta
  };
  
  export default useCreateTask;
  
  
  
  
  
  
  