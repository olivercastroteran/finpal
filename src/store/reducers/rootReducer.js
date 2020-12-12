import { combineReducers } from 'redux';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export default rootReducer;
