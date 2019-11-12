import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChangeCriteria from './ChangeCriteria';

class Step3Client extends Component {

    state = {
        showCriteria: false,
        criteria: {
            user_step_id: '',
            bedroom_count: '',
            bathroom_count: '',
            square_feet: '',
            location: '',
            notes: ''
        },
        showing: {
            user_step_id: '',
            address: '',
            mls_number: ''
        },
        offer: {
            user_step_id: '',
            name: '',
            address: '',
            price: 0,
            closing_date: '',
            earnest_money: '',
            down_payment: '',
            seller_closing_costs: ''
        }
    }

    addCriteriaButton = () => {
        console.log('this is addCriteria');
        this.setState({
            showCriteria: true
        })
        // this.props.dispatch({type: 'POST_CRITERIA', payload: this.state.criteria})
    }

    render() { 
        return (
            <div>
                {this.state.showCriteria ? <ChangeCriteria showCriteria={this.state.showCriteria}/> : 
                <>
                 <div className="criteria">
                    Current Criteria:
                    <button onClick={this.addCriteriaButton}>Add Criteria</button>
                </div>
                <div className="showing">
                    Recent showing requested:
                    <button>Request a showing</button>
                </div>
                <button>Make Offer</button>

                <div className="requestShowing">
                    <input placeholder="address"/>
                    <input placeholder="MLS number"/>
                    <button onClick={this.makeRequest}>Make Request</button>
                    House requested:
                </div>

                
                </>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(Step3Client);