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

apiService.getJams = (location) => {
  fetch(`${BASE_URL}/searchjam`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}



export default apiService