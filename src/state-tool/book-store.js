import DispatcherInstance from './dispatcher';

const EventEmitter = require('events');

class BookStore extends EventEmitter {

  constructor() {

    super();
    this.books = [{
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
    },
    {
      id: '4',
      name: 'book4'
    }];
  }

  getBooks() {
    return this.books;
  }

  addBook(payload) {
    
    this.books.push({
      id: payload.id,
      name: payload.name
    });
    this.emit('change');
  }

  deleteBook(payload) {
    
    this.books = this.books.filter(function (item) {
      return item.id != payload.id
    });
    this.emit('change');
  }

  handleAction(action) {

    if (!action || !action.type) {
      return;
    }

    switch (action.type) {

      case 'CREATE_BOOK':
        this.addBook(action.payload);
        break;

      case 'DELETE_BOOK':
        this.deleteBook(action.payload);
        break;

      default:
        console.log('inside the default case of handle action for book store');
    }
  }
}

const BookStoreInstance = new BookStore();

DispatcherInstance.register(BookStoreInstance.handleAction.bind(BookStoreInstance));

export default BookStoreInstance;
