import DispatcherInstance from './dispatcher';

function createBook(bookName){
  DispatcherInstance.dispatch({
    type: 'CREATE_BOOK',
    payload: {
      id: Date.now(),
      name: bookName
    }
  });
}

function deleteBook(bookId){
  DispatcherInstance.dispatch({
    type: 'DELETE_BOOK',
    payload: {
      id: bookId
    }
  });
}

let ACTIONS_LIST = {
  CREATE_BOOK: createBook,
  DELETE_BOOK: deleteBook
};

export default ACTIONS_LIST;