import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { settingsReducer } from './settingsReducer';
import { financeReducer } from './financeReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  finance: financeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
