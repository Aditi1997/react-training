import {
  // CHANGE_RATING
  // CHANGE_RATING_TYPE,
  CHANGE_RATING_ACTION_TYPES,
}
from './../actions/change_rating';


const initialState = {
  movies: [],
  isLoading: true,
};

const updateRating = (movies, id, rating) => {
  return movies.map(movie => {
    if(movie.id === id) {
      return {
        ...movie,
        rating,
      }
    }
    return movie;
  });
}

const movies= (state = initialState, action) => {
  switch(action.type){
    case CHANGE_RATING_ACTION_TYPES.SAVE_MOVIES:
      return {
        isLoading: false,
        movies: action.payload,
      }

    case CHANGE_RATING_ACTION_TYPES.CHANGE_RATING:
      return {
        ...state,
        movies: updateRating(state.movies, action.payload.id, action.payload.rating),
      }

    default:
      return state
  }
};

export default movies

/*const mockResponse = {
  {
    "name": "The final destination",
    "id": 01,
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/FD5_poster.jpg/220px-FD5_poster.jpg",
    "rating": 4
  }, {
    "name": "Fast and Furious",
    "id": 02,
    "image": "https://images-na.ssl-images-amazon.com/images/I/910VekmDZ5L._SY450_.jpg",
    "rating": 4.5
  }, {
    "name": "Neighbours",
    "id":03,
    "image": "https://ia.media-imdb.com/images/M/MV5BMTY0NzUxMDUzN15BMl5BanBnXkFtZTgwNzI2MTY4ODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "rating": 3.5
  }, {
    "name": "Baby Driver",
    "id":04,
    "image": "https://i.imgur.com/NdlrGcR.jpg",
    "rating": 4.5
  }
}*/
