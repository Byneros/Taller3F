import { useMutation } from 'react-query';
import HttpTaskClient from '@services/HttpTaskClient';
const taskClient = new HttpTaskClient();
const useCreateTask = () => {
    return useMutation(values => taskClient.createTask(values));
};
export default useCreateTask;