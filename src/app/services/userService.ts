// import api from './api';
import { User } from '../types/user';

// export const fetchUsers = async (): Promise<User[]> => {
//   const response = await api.get('/');
//   return response.data;
// };

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users'); // hoặc API tương ứng
  const data = await res.json();

  // Phòng trường hợp data không phải array
  if (!Array.isArray(data)) return [];

  return data as User[];
};
