import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
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

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;