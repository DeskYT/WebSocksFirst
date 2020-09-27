import http from './index';
export const loginUser = (data) => http.post('/login', data);