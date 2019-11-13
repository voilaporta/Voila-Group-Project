import React, { Component } from 'react';
import { connect } from 'react-redux';

class MakeOffer extends Component {

    state = {
        user_step_id: '',
        name: '',
        address: '',
        price: 0,
        closing_date: '',
        earnest_money: '',
        down_payment: '',
        seller_closing_costs: ''
    }

    render() {
        return( 
            <div className="makeOffer">
                    <input placeholder="name"/>
                    <input placeholder="address"/>
                    <input placeholder="price"/>
                    <input type="date" placeholder="closing date"/>
                    <input placeholder="earnest money"/>
                    <input placeholder="down payment"/>
                    <input placeholder="seller closing costs"/>
                    <button onClick={this.makeOffer}>Submit Offer</button>
                    <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(MakeOffer);    