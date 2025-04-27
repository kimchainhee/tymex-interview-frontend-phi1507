// https://run.mocky.io/v3/e47dbc08-2106-42c8-9e41-cebffdae2fcd => RỖNG
// https://run.mocky.io/v3/b75b3c22-8864-4bb6-991a-291e7bb113d7 => CÓ 3 USER
// https://run.mocky.io/v3/40243134-3b9e-4ea6-8a5b-d58b575e4a25 => CÓ 9 USER

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://run.mocky.io/v3/40243134-3b9e-4ea6-8a5b-d58b575e4a25', // bạn sẽ thay bằng link JSON Server
});

export default api;
