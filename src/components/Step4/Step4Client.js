import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step4Client extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_ACCEPTED_OFFER', payload: {userStepId: this.props.userStepId}})
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.offerAccepted)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    offerAccepted: state.offerAccepted,
});

export default connect(mapStateToProps)(Step4Client);