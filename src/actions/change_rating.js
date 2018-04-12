

import { fetchMovies } from '../services/moviesApi';

const CHANGE_RATING_ACTION_TYPES = {
  CHANGE_RATING: 'change_rating/CHANGE_RATING',
  SAVE_MOVIES: 'change_rating/SAVE_MOVIES',
};

const changeRatingActions = {
  loadInitialData: () => (dispatch) => {
    fetchMovies()
    .then((response) => {
      response.json()
      .then((data) => {
        dispatch(changeRatingActions.saveMoviesStore(data));
      })
    });
  },

  saveMoviesStore: payload => ({ type: CHANGE_RATING_ACTION_TYPES.SAVE_MOVIES, payload }),

  changeRating: payload => ({ type: CHANGE_RATING_ACTION_TYPES.CHANGE_RATING, payload }),
};

export {
  // ReactTrainingActionTypes,
  CHANGE_RATING_ACTION_TYPES,
  changeRatingActions,
};
