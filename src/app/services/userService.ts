import { User } from '../types/user';

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch('/api/users');
  const data = await res.json();

  if (!Array.isArray(data)) return [];

  return data as User[];
};
