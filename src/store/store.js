import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const initState = [
  // Need the states from App.js
  {videos: []},
  {currentVideo: null},
  // Need the state from Search.js
  {value: ''}
]