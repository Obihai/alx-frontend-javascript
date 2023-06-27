function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = 'API response';
      resolve(response);
    }, 1000);
  });
}

export default getResponseFromAPI;
