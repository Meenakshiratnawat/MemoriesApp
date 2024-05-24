import { combineReducers } from 'redux';

import posts from './posts';
//combined reducers used to combine the posts into one reducers function 
export const reducers = combineReducers({ posts });