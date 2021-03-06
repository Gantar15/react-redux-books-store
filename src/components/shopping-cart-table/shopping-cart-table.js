import {connect} from 'react-redux';

import {booksRemovedFromCart, allBooksRemovedFromCart, booksAddedToCart} from '../../actions';

import './shopping-cart-table.css';


const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  return (
    <div className="shopping-cart-table">
      <h4>Your Order</h4>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, idx) => {
              const { id, name, count, total } = item;
              return (
                <tr key={id}>
                  <td>{idx+1}</td>
                  <td>{name}</td>
                  <td>{count}</td>
                  <td>${total}</td>
                  <td>
                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-sm float-right">
                      <i className="fa fa-trash-o" />
                    </button>
                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-sm float-right">
                      <i className="fa fa-plus-circle" />
                    </button>
                    <button onClick={() => onDecrease(id)} className="btn btn-outline-warning btn-sm float-right">
                      <i className="fa fa-minus-circle" />
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};


const mapStateToProps = ({shoppingCart: {cartItems, cartTotal}}) => {
  return {
    items: cartItems,
    total: cartTotal
  }
};

const mapDispatchToProps = {
  onIncrease: booksAddedToCart,
  onDecrease: booksRemovedFromCart,
  onDelete: allBooksRemovedFromCart
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
