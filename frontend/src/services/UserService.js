import axios from 'axios';

class UserService {

    saveUser(user) {
        return axios.post('http://localhost:8080/api/user/add', user)
    }

    userLogin(user) {
        return axios.post('http://localhost:8080/api/user/login', user)
    }

    userLogout() {
        return axios.get('http://localhost:8080/api/user/logout')
    }
}

const userService = new UserService();
export default userService;