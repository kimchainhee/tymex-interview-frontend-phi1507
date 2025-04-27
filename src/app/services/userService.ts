import api from './api';
import { User } from '../types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get('/');
  return response.data;
};
