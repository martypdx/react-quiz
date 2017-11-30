import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ author, title }) => <li>{title} by {author}</li>;

Book.propTypes = {
  book: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string
  })
};

export default Book;