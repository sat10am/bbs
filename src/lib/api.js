import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://wodn4131.cafe24.com/sat10am/public/api/v1',
    timeout: 1000,
    headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyIiwiZW1haWwiOiJma3JtdGxlbzEyQGdtYWlsLmNvbSIsIm5hbWUiOiJ5ZXNkb2luZyIsImlhdCI6MTU1NjcwMjI5MCwiZXhwIjoxNTU3MzA3MDkwfQ.-wjrtJDBDUP-dmMf_i1P2ThHmhwg28XY_sQZiMRqyX0'}
  });
  

export const getAllBoards = async () =>  await instance.get('/boards').then(res => res.data);

export const postBoard = async (title, imageUrl, slideUrl, description) => await instance.post('/boards', {title, imageUrl, slideUrl, description}).then(res => res.data);