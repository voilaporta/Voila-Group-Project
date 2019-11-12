import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step3Client extends Component {

    state = {
        criteria: {
            bedroom_count: '',
            bathroom_count: '',
            square_feet: '',
            location: '',
            notes: ''
        },
        showing: {
            address: '',
            mls_number: ''
        },
        offer: {
            name: '',
            address: '',
            price: 0,
            closing_date: '',
            earnest_money: '',
            down_payment: '',
            seller_closing_costs: ''
        }
    }

    render() { 
        return (
            <div>
                <div className="criteria">
                    Current Criteria:
                    <button>Add Criteria</button>
                </div>

                <div className="showing">
                    Recent showing requested:
                    <button>Request a showing</button>
                    <button>Make Offer</button>
                </div>

                <div className="criteriaChange">
                    <input placeholder="bedroom count"/>
                    <input placeholder="bathroom count"/>
                    <input placeholder="square feet"/>
                    <input placeholder="location/zip code"/>
                    <input placeholder="Any notes for your realtor?"/>
                    <button onClick={this.updateCriteria}>Update Criteria</button>
                </div>

                <div className="requestShowing">
                    <input placeholder="address"/>
                    <input placeholder="MLS number"/>
                    <button onClick={this.makeRequest}>Make Request</button>
                    House requested:
                </div>

                <div className="makeOffer">
                    <input placeholder="name"/>
                    <input placeholder="address"/>
                    <input placeholder="price"/>
                    <input type="date" placeholder="closing date"/>
                    <input placeholder="earnest money"/>
                    <input placeholder="down payment"/>
                    <input placeholder="seller closing costs"/>
                    <button onClick={this.makeOffer}>Make Offer</button>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(Step3Client);