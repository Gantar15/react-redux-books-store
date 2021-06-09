import { Component } from 'react';
import BookListItem from '../book-list-item';

import './book-list.css';

class BookList extends Component {

  getBooksList(books){
    return books.map(book => {
      return (
        <li key={book.id}>
          <BookListItem book={book}/>
        </li>
      );
    })
  }

  render(){
    const {books} = this.props;
    const booksList = this.getBooksList(books);

    return (
      <ul>
        {booksList}
      </ul>
    );
  }
}


export default BookList;