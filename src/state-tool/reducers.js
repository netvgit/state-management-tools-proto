import { combineReducers } from 'redux';

function books(state=[], action){

  switch(action.type){
 
    case 'CREATE_BOOK':
    break;
 
    case 'DELETE_BOOK':
    break;
 
    default:
      return state;
  }

  return state;
}

function users(state=[], action){

  switch(action.type){

    case 'CREATE_USER':
    break;

    case 'DELETE_USER':
    break;

    default:
      return state;
  }

  return state;
}

const combinedReducers = combineReducers({
  books,
  users
});

export default combinedReducers;