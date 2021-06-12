const updateBookList = (state, action) => {
    switch(action.type){
        case 'FETCH_BOOKS_REQUESTED':
            return {
                loading: true,
                books: [],
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: action.payload
            };
        default: 
            return state.bookList;
    }
};

export default updateBookList;