import {createStore} from "redux";
import {myReducer} from '../components/ReduxPage/Actions and reducers/reducers'

export const initialState = {
  x: 10,
  name: 'Darth',
  lastName: 'Vader',
  reduxObject: {
    red: '1',
    blue: '2',
    green: '3'
  },
  musicAlbums: []
};

export const store = createStore(myReducer);
