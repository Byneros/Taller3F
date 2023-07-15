import HttpClient from './HttpClient';
class HttpTaskClient extends HttpClient {
    constructor() {
        super('https://sari-snapper.cyclic.app');
    }
    createTask(taskData) {
        return this.post('/Tarea', taskData);
    }
    getTasks() {

        return this.get('/Tarea');
    }
    getTask(id) {
        return this.get(`/Tarea/${id}`);
    }
    updateTask(id, taskData) {
        return this.put(`/Tarea/${id}`, taskData);
    }
    deleteTask(id) {
        return this.delete(`/Tarea/${id}`);
    }
    startTask(id) {
        return this.post(`/Tarea/${id}/iniciar`);
    }
    finishTask(id) {
        return this.post(`/Tarea/${id}/finalizar`);
    }
    declineTask(id) {
        return this.post(`/Tarea/${id}/declinar`);
    }
    
}
export default HttpTaskClient;