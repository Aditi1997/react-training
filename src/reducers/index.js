import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import ReactTrainingHomeReducer from './reactTrainingReducer';
import { routerReducer } from 'react-router-redux';
import movies from './rating_reducer'

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  reactTrainingStore: ReactTrainingHomeReducer,
  moviesStore: movies,
});

export default rootReducer;
