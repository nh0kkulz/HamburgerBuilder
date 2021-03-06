import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    // state = {
    //     ingredients:null,
    //     totalPrice: 0
    // }
    
    // componentWillMount() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price=0;
    //     for (let param of query.entries()) {
    //         if (param[0] === 'price') {
    //             price=param[1];
    //         } else {
    //             ingredients[param[0]] = +param[1];
    //         }
            
    //     }
    //     this.setState({ingredients: ingredients, totalPrice: price});
    // }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact')
    }
    render() {
        return (
            <div>
                <CheckoutSummary checkoutCancel={this.checkoutCancelHandler} 
                checkoutContinue={this.checkoutContinueHandler}
                ingredients={this.props.ings}/>
                <Route path={this.props.match.path + '/contact'} 
                // Trick when not using 'redux'
                // render={(props)=> <ContactData {...props} ingredients={this.state.ingredients} price={this.state.totalPrice}/>}
                component={ContactData}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}
export default connect(mapStateToProps)(Checkout);