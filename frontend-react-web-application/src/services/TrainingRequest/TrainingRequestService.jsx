import axios from 'axios';
import authHeader from '../auth/auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class TrainingRequestService{
    getUserDetails(){
        return axios.get(API_URL + 'training-request',{headers:authHeader()})
    }
}
export default new TrainingRequestService()