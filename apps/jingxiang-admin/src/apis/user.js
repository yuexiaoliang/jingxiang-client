import http from '@/utils/http';

export const getUsers = (params) => {
  return http.get('/user', { params });
};
