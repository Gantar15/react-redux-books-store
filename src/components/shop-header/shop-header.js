import './shop-header.css';
import {Link} from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link className="logo text-dark" to="/">BStore</Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        <p>{numItems} items (${total})</p>
      </Link>
    </header>
  );
};

export default ShopHeader;
