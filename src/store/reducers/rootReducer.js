import { combineReducers } from 'redux';
import { financeReducer } from './financeReducer';
import { settingsReducer } from './settingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  finance: financeReducer,
});

export default rootReducer;
