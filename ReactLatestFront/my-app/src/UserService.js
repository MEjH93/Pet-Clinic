import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users'; //ovde umesto localhost ide recimo petclini2020herokuapp.com

class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }
}
export default new UserService();