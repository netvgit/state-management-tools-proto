import React, { Component } from "react";
import { connect } from 'react-redux';

const BookRow = (props) => {
  return (
    <div>
      <div style={{ float: "left", width: "20%" }}>{props.bookId}</div>
      <div style={{ float: "left", width: "60%" }}>{props.bookName}</div>
      <div style={{ float: "left", width: "20%" }}>
        <input type="button" value="Delete" onClick={
          () => props.deleteBook(props.bookId)
        } />
      </div>
    </div>
  )
}

class Books extends Component{
  constructor(){
    super();
  }
  render(){
    let booksDisplay = [];
    let bookCount = 1;
    this.props.books.forEach(book => {
      let bookEle = <BookRow 
        key={ bookCount } 
        bookId={ book.id } 
        bookName={ book.name }
        deleteBook={ () => {
          console.log('inside delete book with book id = '+book.id);
        }} />
      bookCount++;
      booksDisplay.push(bookEle);
    });
    return (
      <div className='main-div'>
        <h1>List of Books</h1>
        { booksDisplay }
      </div>
    );
  }
}

export default connect(
  (state)=>{
    return {
      books: state.books
    };
  }, 
  () => {
    return {};
})(Books);