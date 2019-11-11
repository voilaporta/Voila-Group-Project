import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step1Client extends Component {

    render() {
        return (
            <div>
                <p>Step 1 Client</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(Step1Client);