import React, { Component } from "react";
import { connect } from 'react-redux';

import ACTIONS_LIST from '../state-tool/actions';

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
        deleteBook={ (bookId) => {
          this.props.deleteBook(bookId);
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
  (dispatch) => {
    return {
      deleteBook: (bookId) => {
        dispatch(ACTIONS_LIST.DELETE_BOOK(bookId))
      }
    };
})(Books);