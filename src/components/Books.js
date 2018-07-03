import React, { Component } from "react";

class Books extends Component {
  constructor() {

    super();
    
    this.state = {
      newBook : '',
      books : [{
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
        }
    ]};

    this.addBook = this.addBook.bind(this);
    this.handleBookInputChange = this.handleBookInputChange.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }
  addBook(){
  
    if(this.state.newBook){
      let books = this.state.books;
      books.push({
        id: Date.now(),
        name: this.state.newBook
      });
      this.setState({
        books: books
      });
      this.state.newBook = '';
    }    
  }
  handleBookInputChange(event){
    
    this.setState({
      newBook: event.target.value
    });
  }
  deleteBook(bookId){
    console.log(bookId);
    if(bookId){
      let books = this.state.books;
      this.setState({
        books: books.filter(function (item) {
          return item.id!=bookId
        })
      });
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