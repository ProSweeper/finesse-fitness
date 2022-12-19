import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

export async function create(data) {
  return sendRequest(`${BASE_URL}/create`, 'POST', data);
}