import {createStore} from "redux";
import {myReducer} from '../components/ReduxPage/Actions and reducers/reducers'

export const initialState = {
  reduxObject: {
    red: '1',
    blue: '2',
    green: '3'
  },
  musicAlbums: [],
  user: {}
};

export const store = createStore(myReducer);
