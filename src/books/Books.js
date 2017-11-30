import React, { Component } from 'react';
import Book from './Book';
import AddBook from './AddBook';

export default class Books extends Component {
  state = {
    books: []
  }

  handleAdd = (book) => {
    this.setState(prevState => ({
      books: [...prevState.books, book]
    }));
  };

  render() {
    return (
      <div>
        <AddBook onAdd={this.handleAdd}/>
        <ul>
          {this.state.books.map((book, i) => <Book key={i} {...book}/>)}
        </ul>
      </div>
    );
  }
}

