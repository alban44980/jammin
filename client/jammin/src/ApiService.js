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
};

apiService.getJams = (city) => {
  return (
    fetch(`${BASE_URL}/searchjam`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(city),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

apiService.postMessage = (message, id) => {
  return (
    fetch(`${BASE_URL}/jams/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

apiService.getEvent = (id) => {
  return (
    fetch(`${BASE_URL}/jams/${id}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

export default apiService;
