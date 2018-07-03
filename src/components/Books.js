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
  render() {
    let booksDisplay = [];
    this.state.books.forEach(book => {
      let bookDiv = 
        <div>
          <div style={{ float: "left", width: "20%" }}>{ book.id }</div>
          <div>{ book.name }</div>
        </div>;
      booksDisplay.push(bookDiv);
    });
    return (
      <div>
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