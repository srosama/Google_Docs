import { User } from '@/types/auth-types';
import axios from 'axios';

// Change this in production
const API_URL = 'http://localhost:3000/auth/login'; 

export const fetchUser = async ()=>  {
  try{
    const user:User = await axios.post(`${API_URL}`, {}, { withCredentials: true });
    return user;
  } catch(error) {
    console.error('Error fetching user', error);
    return false;
  }
  
}


