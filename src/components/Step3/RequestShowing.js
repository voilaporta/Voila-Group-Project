import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequestShowing extends Component {

    state = {
        user_step_id: '',
        address: '',
        mls_number: ''  
    }

    render() {
        return( 
            <div className="requestShowing">
                    <input placeholder="address"/>
                    <input placeholder="MLS number"/>
                    <button onClick={this.makeRequest}>Make Request</button>
                    <button onClick={this.cancel}>Cancel</button>
                    <br/>
                    House requested:
            </div>
        )
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(RequestShowing);    