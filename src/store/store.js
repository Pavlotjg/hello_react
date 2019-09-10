import { createStore} from "redux";
import { myReducer } from '../components/ReduxPage/Actions and reducers/reducers'

 export const initialState = {
  x: 10,
  name: 'Albert',
  lastName: 'Cheekido',
  reduxObject: {
    red: '1',
    blue: '2',
    green: '3'
  }
};


export const store = createStore(myReducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FIRST_NAME':
      return {...state, name: action.payload};
    case 'CHANGE_LAST_NAME':
      return {...state, lastName: action.payload};
    default:
      return state;
  }
}
