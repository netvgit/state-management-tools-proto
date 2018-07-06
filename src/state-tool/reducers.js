import { combineReducers } from 'redux';
import store from './store';

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
      
      let bookData = action.payload;
      if (bookData.name) {
        newState = [
          ...state,
          {
            id: Date.now(),
            name: bookData.name
          }
        ];
        //this.state.newBook = '';
      } 
      return newState;
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
  let newState = '';
  switch(action.type){

    case 'INPUT_BOOK_CHANGE':
      newState = action.payload.newBookValue;
      return newState;
    break;
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
  newBook,
  books,
  users
});

export default combinedReducers;