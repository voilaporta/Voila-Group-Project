import React, { Component } from 'react';
import { connect } from 'react-redux';

class RequestShowing extends Component {

    render() {
        return( 
            <div>
                <div className="requestShowing">
                    <input placeholder="address"/>
                    <input placeholder="MLS number"/>
                    <button onClick={this.makeRequest}>Make Request</button>
                    House requested:
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(RequestShowing);    