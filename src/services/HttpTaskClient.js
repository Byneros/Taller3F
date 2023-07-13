import HttpClient from './HttpClient';
class HttpTaskClient extends HttpClient {
    constructor() {
        super('http://localhost:3000');
    }
    createTask(taskData) {
        return this.post('/Tarea', taskData);
    }
    getTasks() {

        return this.get('/tareas');
    }
    getTask(id) {
        return this.get(`/tareas/${id}`);
    }
    updateTask(id, taskData) {
        return this.put(`/tareas/${id}`, taskData);
    }
    deleteTask(id) {
        return this.delete(`/tareas/${id}`);
    }
    startTask(id) {
        return this.post(`/tareas/${id}/iniciar`);
    }
    finishTask(id) {
        return this.post(`/tareas/${id}/finalizar`);
    }
    declineTask(id) {
        return this.post(`/tareas/${id}/declinar`);
    }
}
export default HttpTaskClient;