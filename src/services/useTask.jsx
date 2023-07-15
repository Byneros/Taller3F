import { useQuery } from 'react-query';
import HttpTaskClient from '@services/HttpTaskClient';

const taskClient = new HttpTaskClient();

const getTasks = async () => {
    return await taskClient.getTasks();
}

export const useTasks = () => {
    return useQuery('tasks', getTasks);
}