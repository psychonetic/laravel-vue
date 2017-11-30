import axios from 'axios';

export default class ApiService {

    constructor(apiEndpoint){
        this.apiEndpoint = apiEndpoint;
    }

    index(param) {
        return axios.get(this.apiEndpoint+'?page='+param.page+'&sort='+param.sortBy+'&order='+param.order+'&limit='+param.rowsPerPage)
    }

    all(param) {
        return axios.get(this.apiEndpoint+"/all")
    }

    search(param) {
        return axios.get(this.apiEndpoint+'/search?q='+param.search+
            '&page='+param.pagination.page+'&sort='+param.pagination.sortBy+'&order='
            +param.pagination.order+'&limit='+param.pagination.rowsPerPage)
    }

    store(param) {
        return axios.post(this.apiEndpoint, param)
    }

    update(param) {
        return axios.put(this.apiEndpoint+'/' + param.id, param)
    }

    show(param) {
        return axios.get(this.apiEndpoint+'/' + param.id)
    }

    destroy(param) {
        return axios.delete(this.apiEndpoint+'?items='+param.items)
    }
}