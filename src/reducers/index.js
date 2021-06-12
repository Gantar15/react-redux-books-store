
const initState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [
       
    ],
    cartTotal: 324
};

const updateCartItems = (cartItems, item, idx) => {

    if(item.count === 0)
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx+1)
        ];

    if(idx === -1)
        return [
            ...cartItems,
            item
        ];
    else
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx+1)
        ];
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id, 
        count = 0, 
        title : name = book.title, 
        total = 0} = item;
    return {
        id, name,
        count: count + quantity,
        total: total + book.price*quantity
    };
};

const updateOrder = (state, bookId, quantity) => {
    const book = state.books.find(({id}) => id === bookId);
    const existingCartBookIndex = state.cartItems.findIndex(({id}) => id === bookId);
    const existingCartBook = state.cartItems.find(({id}) => id === bookId);

    let newItem = updateCartItem(book, existingCartBook, quantity);
    const updatedCartItems = updateCartItems(state.cartItems, newItem, existingCartBookIndex)
    return {
        ...state,
        cartItems: updatedCartItems
    };
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state,
                loading: true,
                books: [],
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART': 
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART': 
            const item = state.cartItems.find(({id}) => id === action.payload); 
            return updateOrder(state, action.payload, -item.count);
        default: 
            return state;
    }
};

export default reducer;