import axios from 'axios';

// class UserService {

//     saveUser(user, headers) {
//         return axios.post('http://localhost:8080/api/auth/signup', user, headers)
//             // .then(function (response) {
//             //     console.log(response.data)
//             // })
//     }

//     userLogin(user) {
//         return axios.post('http://localhost:8080/api/auth/signin', user)
//             .then(function (response) {
//                 console.log(response.data.accessToken)
//             })
//     }

//     userLogout() {
//         return axios.get('http://localhost:8080/api/user/logout')
//     }
// }

// const userService = new UserService();
// export default userService;

export default axios.create({
    baseURL: 'http://localhost:8080'
})