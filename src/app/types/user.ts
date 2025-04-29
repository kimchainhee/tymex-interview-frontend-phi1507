export interface User {
  id: number;
  name: string;
  price: number;
  image: string;
  author: {
    name: string;
    avatar: string;
    available: number;
  };
  date: string;
  tier: string;
  favourite: number;
  [key: string]: unknown;
}
