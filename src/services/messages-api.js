const BASE_URL = '/api/messages';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(message) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(message)
  }).then(res => res.json());
}

export function update(message) {
  return fetch(`${BASE_URL}/${message._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(message)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}