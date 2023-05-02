import axios from 'axios';

class UserService {

    saveUser(user) {
        return axios.post('http://localhost:8080/api/user/add', user)
    }
}

const userService = new UserService();
export default userService;