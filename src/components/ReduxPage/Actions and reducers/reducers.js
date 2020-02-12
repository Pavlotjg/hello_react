import {initialState} from '../../../store/store'

export function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_FIRST_VALUE':
      return {
        ...state,
        reduxObject: {
          ...state.reduxObject,
          red: action.payload
        }

      };
    case 'CHANGE_SECOND_VALUE':
      return {
        ...state,
        reduxObject: {
          ...state.reduxObject,
          blue: action.payload
        }
      };
    case 'CHANGE_THIRD_VALUE' :
      return {
        ...state,
        reduxObject: {
          ...state.reduxObject,
          green: action.payload
        }
      };

    case 'UPDATE_MUSIC_ALBUMS' :
      return {
        ...state,
        musicAlbums: action.payload
      };

    default:
      return state;
  }
}