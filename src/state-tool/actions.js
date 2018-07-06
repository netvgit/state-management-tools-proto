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

function inputBookChange(newBookValue){
  
  return {
    type: 'INPUT_BOOK_CHANGE',
    payload: {
      newBookValue: newBookValue
    }
  };
}

let ACTIONS_LIST = {
  CREATE_BOOK: createBook,
  DELETE_BOOK: deleteBook,
  INPUT_BOOK_CHANGE: inputBookChange
};

export default ACTIONS_LIST;