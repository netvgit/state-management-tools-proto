function createBook(bookName) {
  return {
    type: 'CREATE_BOOK',
    payload: {
      id: Date.now(),
      name: bookName
    }
  };
}

function deleteBook(bookId) {
  return {
    type: 'DELETE_BOOK',
    payload: {
      id: bookId
    }
  };
}

function updateNewBook(newBookValue){
  return {
    type: 'UPDATE_NEW_BOOK',
    payload: {
      newBookValue: newBookValue
    }
  };
}

let ACTIONS_LIST = {
  CREATE_BOOK: createBook,
  DELETE_BOOK: deleteBook,
  UPDATE_NEW_BOOK: updateNewBook
};

export default ACTIONS_LIST;