import React, { Component } from "react";
import { connect } from 'react-redux';

import store from '../state-tool/store';
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

const InputRow = (props) => {
  return (
    <div>
      Add:&nbsp;&nbsp;<input type='text' value={ props.newBookValue } onChange={ (e) => props.inputBookChange(e.target.value) } />&nbsp;&nbsp;<input type="button" value="Add" onClick={ () => props.createBook(props.newBookValue) } />
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
        <InputRow 
        newBookValue={ this.props.newBook }
        inputBookChange={ this.props.inputBookChange }
        createBook={ this.props.createBook } />
      </div>      
    );
  }
}

export default connect(
  (state)=>{
    return {
      books: state.books,
      newBook: state.newBook
    };
  }, 
  (dispatch) => {
    return {
      deleteBook: (bookId) => {
        dispatch(ACTIONS_LIST.DELETE_BOOK(bookId))
      },
      inputBookChange: (newBookValue) => {
        dispatch(ACTIONS_LIST.INPUT_BOOK_CHANGE(newBookValue))
      },
      createBook: (bookName) => {
        dispatch(ACTIONS_LIST.CREATE_BOOK(bookName));
        dispatch(ACTIONS_LIST.INPUT_BOOK_CHANGE(''));
      }
    };
})(Books);