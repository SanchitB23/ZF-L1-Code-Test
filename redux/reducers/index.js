import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import teamReducer from './teamReducer';
const reducers = combineReducers({
  players: playerReducer,
  team: teamReducer,
});
export default reducers;
