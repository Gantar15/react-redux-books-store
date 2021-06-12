import updateShoppingCart from './shoppingCart';
import updateBookList from './bookList';


const initState = {
    bookList: {
        books: [],
        loading: true,
        error: null
    },
    shoppingCart: {
        cartItems: [],
        cartTotal: 0
    }
};

const reducer = (state = initState, action) => {
    return {
        ...state,
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    };
};

export default reducer;