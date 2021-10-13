import { combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';
import dialogReducer from './dialog-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
	dialogsPage: dialogReducer,
	profilePage: profileReducer,
	usersPage: usersReducer,
	auth: authReducer,

});

let store = createStore(reducers);

export default store;