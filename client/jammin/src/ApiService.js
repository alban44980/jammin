const BASE_URL = 'http://localhost:3001';

const apiService = {};

apiService.postEvent = (event) => {
  fetch(`${BASE_URL}/jams`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

apiService.getJams = () => {
  return
}

export default apiService