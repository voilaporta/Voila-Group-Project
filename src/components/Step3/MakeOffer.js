import React, { Component } from 'react';
import { connect } from 'react-redux';

class MakeOffer extends Component {

    state = {
        buyer_first_name: this.props.buyerFirstName,
        buyer_last_name: this.props.buyerLastName,
        user_step_id: this.props.userStepId.id,
        name: '',
        address: '',
        price: 0,
        closing_date: '',
        earnest_money: '',
        down_payment: '',
        seller_closing_costs: ''
    }



    makeOffer = () => {
        this.props.dispatch({type: 'POST_OFFER_MADE', payload: this.state});
        this.props.dispatch({type: 'EMAIL_OFFER_MADE', payload: this.state});
    }

    handleChange = (event, input) => {
        this.setState({
            ...this.state,
            [input]: event.target.value
        })
    }

    render() {
        return( 
            <div className="makeOffer">
                    <input value={this.state.name} onChange={(event) => this.handleChange(event, 'name')} placeholder="name"/>
                    <input value={this.state.address} onChange={(event) => this.handleChange(event, 'address')} placeholder="address"/>
                    <input value={this.state.price} onChange={(event) => this.handleChange(event, 'price')} placeholder="price"/>
                    <input value={this.state.closing_date} onChange={(event) => this.handleChange(event, 'closing_date')} type="date" placeholder="closing date"/>
                    <input value={this.state.earnest_money} onChange={(event) => this.handleChange(event, 'earnest_money')} placeholder="earnest money"/>
                    <input value={this.state.down_payment} onChange={(event) => this.handleChange(event, 'down_payment')} placeholder="down payment"/>
                    <input value={this.state.seller_closing_costs} onChange={(event) => this.handleChange(event, 'seller_closing_costs')} placeholder="seller closing costs"/>
                    <button onClick={this.makeOffer}>Submit Offer</button>
                    <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userStepId: state.userJourney.find(step => {return step.order === 3})
});

export default connect(mapStateToProps)(MakeOffer);    