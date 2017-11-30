import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ onAdd }) => (
  <form onSubmit={event => {
    event.preventDefault();
    const form = event.target;
    const { title, author } = form.elements;

    onAdd({
      title: title.value,
      author: author.value
    });

    form.reset();
    title.focus();
  }}>
    <label>Title: <input name="title"/></label>
    <label>Author: <input name="author"/></label>
    <button type="submit">Add</button>
  </form>
);

AddBook.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddBook;