import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

export async function create(data) {
  return sendRequest(`${BASE_URL}/create`, 'POST', data);

}

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addExercise(name, workout) {
  return sendRequest(`${BASE_URL}/add-exercise`, 'PUT', {name, workout});
}

export async function deleteWorkout(workout) {
  return sendRequest(`${BASE_URL}/delete`, 'DELETE', {workout})
}