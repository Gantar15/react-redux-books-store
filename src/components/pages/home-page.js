import BookList from '../book-list';
import {withBookstoreService} from '../hoc';


const HomePage = ({bookstoreService}) => {
    return (
        <BookList books={bookstoreService.getBooks()}/>
    );
};

export default withBookstoreService(HomePage);