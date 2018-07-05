import { combineReducers } from 'redux';

function books(state =[{
    id: '1',
    name: 'book1'
  },
  {
    id: '2',
    name: 'book2'
  },
  {
    id: '3',
    name: 'book3'
  }], 
  action){
  
  let newState = [];
  
  switch(action.type){
 
    case 'CREATE_BOOK':
    break;
 
    case 'DELETE_BOOK':
      
      newState = state.filter(function(item){
        return item.id!=action.payload.id;
      });
      
      return newState;
    break;
 
    default:
      return state;
  }
  return state;
}

function newBook(state='', action){
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
  newBook,
  books,
  users
});

export default combinedReducers;