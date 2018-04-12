const fetchMovies = () => fetch('http://www.mocky.io/v2/5acef9522e00004b00c2c3df?mocky-delay=3000ms', {
  method: 'GET',
});

export {
  fetchMovies,
};
