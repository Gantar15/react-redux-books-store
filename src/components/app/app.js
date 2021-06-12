import { Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {HomePage, CartPage} from '../pages';
import ShopHeader from '../shop-header';

import './app.css';


const App = ({cartTotal, numItems}) => {
    return (
        <Fragment>
            <ShopHeader numItems={numItems} total={cartTotal}/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/cart" component={CartPage}/>
            </Switch>
        </Fragment> 
    );
};


const mapStateToProps = ({shoppingCart: {cartTotal, cartItems}}) => ({
    cartTotal,
    numItems: cartItems.reduce((all, {count}) => all+count, 0)
});

export default connect(mapStateToProps)(App);