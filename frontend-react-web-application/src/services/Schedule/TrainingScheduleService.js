import axios from 'axios';
import authHeader from '../auth/auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class TrainingScheduleService{
    getAllTrainingSchedule(){
        return axios.get(API_URL + 'training-schedules',{headers:authHeader()})
    }
    
}
export default new TrainingScheduleService()