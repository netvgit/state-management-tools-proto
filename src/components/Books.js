import React, { Component } from "react";

import ACTIONS_LIST from "../state-tool/actions";
import BookStoreInstance from "../state-tool/book-store";

class Books extends Component {

  constructor() {

    super();

    this.state = {
      newBook : '',
      books : BookStoreInstance.getBooks()
    };

    this.addBook = this.addBook.bind(this);
    this.handleBookInputChange = this.handleBookInputChange.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount(){
    BookStoreInstance.on('change', () => {
      this.setState({
        newBook: '',
        books: BookStoreInstance.getBooks()
      });
    })
  }

  addBook(){

    if (this.state.newBook) {
      ACTIONS_LIST.CREATE_BOOK(this.state.newBook);
    }
  }

  handleBookInputChange(event){
    
    this.setState({
      newBook: event.target.value
    });
  }

  deleteBook(bookId){
    
    if(bookId){
      ACTIONS_LIST.DELETE_BOOK(bookId);
    }
  }

  render() {
    let booksDisplay = [];
    let bookCount = 1;
    this.state.books.forEach(book => {
      let bookDiv = 
        <div key={ bookCount }>
          <div style={{ float: "left", width: "20%" }}>{ book.id }</div>
          <div style={{ float: "left", width: "60%" }}>{book.name}</div>
          <div style={{ float: "left", width: "20%" }}>
            <input type="button" value="Delete" onClick={
              () => this.deleteBook(book.id)
            } />
          </div>
        </div>;
      bookCount++;  
      booksDisplay.push(bookDiv);
    });
    return (
      <div className='main-div'>
        <h1>List of Books</h1>
        { booksDisplay }
        <div>
          Add:&nbsp;&nbsp;<input type='text' value={this.state.newBook} onChange={this.handleBookInputChange} />&nbsp;&nbsp;<input type="button" value="Add" onClick={ this.addBook } />
        </div>
      </div>
    );
  }
}

export default Books;