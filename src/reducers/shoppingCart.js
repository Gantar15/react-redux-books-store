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
    const {bookList: {books}, shoppingCart: {cartItems, cartTotal}, shoppingCart} = state;

    const book = books.find(({id}) => id === bookId);
    const existingCartBookIndex = cartItems.findIndex(({id}) => id === bookId);
    const existingCartBook = cartItems.find(({id}) => id === bookId);

    let newItem = updateCartItem(book, existingCartBook, quantity);
    const updatedCartItems = updateCartItems(cartItems, newItem, existingCartBookIndex)
    return {
        ...shoppingCart,
        cartItems: updatedCartItems,
        cartTotal: cartTotal + quantity*book.price
    };
};

const updateShoppingCart = (state, action) => {
    switch(action.type){
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'BOOK_REMOVED_FROM_CART': 
            return updateOrder(state, action.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CART': 
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload); 
            return updateOrder(state, action.payload, -item.count);
        default: 
            return state.shoppingCart;
    }
};

export default updateShoppingCart;