import { Component } from 'react';
import {connect} from 'react-redux';

import BookListItem from '../book-list-item';
import {withBookstoreService} from '../hoc';
import {compose} from '../../utils';
import Loader from '../loader';
import {fetchBooks} from '../../actions';
import {booksAddedToCart} from '../../actions';
import ErrorIndicator from '../error-indicator';

import './book-list.css';


const BookList = ({books, onAddedToCart}) => {
  return (
    <div className="book-list">
      <ul>
          {
            books.map(book => {
                return (
                  <li key={book.id}>
                    <BookListItem onAddedToCart={() => onAddedToCart(book.id)} book={book}/>
                  </li>
                );
            })
          }
      </ul>
    </div>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render(){
    const {books, loading, error, onAddedToCart} = this.props;

    if(error){
      return (
        <div className="book-list">
          <ErrorIndicator/>
        </div>
      );
    }

    if(loading){
      return (
        <div className="book-list">
          <Loader/>
        </div>
      );
    }

    return <BookList onAddedToCart={onAddedToCart} books={books}/>;
  }
}


const mapStateToProps = ({bookList: {books, loading, error}}) => ({books, loading, error});

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: bookId => dispatch(booksAddedToCart(bookId))
  };
}
 

export default compose(withBookstoreService,
  connect(mapStateToProps, mapDispatchToProps))(BookListContainer);