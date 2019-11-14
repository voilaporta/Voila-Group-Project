import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import Countdown from 'react-countdown-now';

class Step5Admin extends Component {

    state = {
        now: new Date(),
        start: '',
        offer: {}
    }

    componentDidMount(){
        this.props.dispatch({ type: 'GET_ACCEPTED_OFFER', payload: {userStepId: this.props.userStepId-1 }})
        setTimeout(() => {
            this.setState({offer: this.props.offerAccepted.find(item => { return item.userStep_id == this.props.userStepId - 1 })})
        }, 250);
    }

    render() {
        console.log(this.state.offer.date_time_created);
        
        return (
            <div>
                {JSON.stringify(this.props.test)}
                {this.state.offer != undefined ? <Countdown date={new Date(this.state.offer.date_time_created).getTime() + 172800000}/> : ''}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    offerAccepted: state.offerAccepted,
});

export default connect(mapStateToProps)(Step5Admin);