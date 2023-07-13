import axios from 'axios';
class HttpClient {
    constructor(baseURL) {
        this.instance = axios.create({
            baseURL: baseURL,
        });
    }
    async _request(method, url, data = null) {
        try {
            const response = await this.instance({
                method,
                url,
                data,
            });
            return response.data;
        } catch (error) {
            if (error.response) {

                console.error('Error de respuesta del servidor:',

                    error.response.data);

            } else if (error.request) {

                console.error('No se recibió ninguna respuesta:',

                    error.request);
            } else {

                console.error('Error al configurar la petición:',

                    error.message);
            }
            throw error;
        }

    }
    get(url) {
        return this._request('get', url);
    }
    post(url, data) {
        return this._request('post', url, data);
    }
    put(url, data) {
        return this._request('put', url, data);
    }
    delete(url) {
        return this._request('delete', url);
    }
}
export default HttpClient;