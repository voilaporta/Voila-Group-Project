import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../MaterialUIComponents/StepCard';


class BuyerJourney extends Component {

    render() {
        return (
            <div>
                <StepCard header='' step='1' component={}/>


            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(BuyerJourney);