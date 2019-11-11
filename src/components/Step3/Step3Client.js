import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step3Client extends Component {

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
                    <button>Update Criteria</button>
                </div>

                <div className="requestShowing">
                    <input placeholder="address"/>
                    <input placeholder="MLS number"/>
                    <input placeholder="Any notes for your realtor?"/>
                    <button>Make Request</button>
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
                    <button>Make Offer</button>
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