import React, { Component } from 'react';

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

const Book = ({ author, title }) => <li>{title} by {author}</li>;

const AddBook = ({ onAdd }) => (
  <form onSubmit={event => {
    event.preventDefault();
    const { title, author } = event.target.elements;
    onAdd({
      title: title.value,
      author: author.value
    });
  }}>
    <label>Title: <input name="title"/></label>
    <label>Author: <input name="author"/></label>
    <button type="submit">Add</button>
  </form>
);