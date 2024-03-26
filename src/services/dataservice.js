import Axios from 'axios';
Axios.defaults.baseURL = 'https://127.0.0.1:8000/api/products/';

export default {
    getAllProducts(){
        return Axios.get('https://127.0.0.1:8000/api/products/'+id)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error;
        });
    },
    // kivalasztottGyartoAutoi(manufacturerid){
    //     return Axios.get(`/api/cars/${manufacturerid}`)
    // },
    // saveUser(user){
    //     return Axios.post('/users',user).then(()=>{});
    // },
    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}