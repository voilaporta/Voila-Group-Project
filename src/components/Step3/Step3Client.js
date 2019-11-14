import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentToUpdate from './ComponentToUpdate';

class Step3Client extends Component {

    state = {
        user_step_id: this.props.userStepId.id,
        showComponentToUpdate: false,
        showCriteria: false,
        showRequest: false,
        showOffer: false
    }

   componentDidMount = () => {
    this.props.dispatch({type: 'GET_JOURNEY'});
    this.props.dispatch({type: 'GET_CRITERIA', payload: this.state.user_step_id});
}

    addCriteria = () => {
        console.log('this is addCriteria');
        this.setState({
            showCriteria: true,
            showComponentToUpdate: true
        })
        // this.props.dispatch({type: 'POST_CRITERIA', payload: this.state.criteria})
    }

    requestShowing = () => {
        console.log('this is requestShowing');
        this.setState({
            showRequest: true,
            showComponentToUpdate: true
        })
    }

    makeOffer = () => {
        console.log('this is makeOffer');
        this.setState({
            showOffer: true,
            showComponentToUpdate: true
        })
    }

    render() { 
        return (
            <div>
                {this.state.showComponentToUpdate ? <ComponentToUpdate showCriteria={this.state.showCriteria} showRequest={this.state.showRequest} showOffer={this.state.showOffer}/> : 
                <>
                 <div className="criteria">
                    Current Criteria:
                    <br/>
                    <button onClick={this.addCriteria}>Add Criteria</button>
                    {JSON.stringify(this.props.criteria)}

                </div>
            
                <div className="showing">
                    Recent showing requested:
                    <br/>
                    <button onClick={this.requestShowing}>Request a showing</button>
                </div>
                <button onClick={this.makeOffer}>Make Offer</button>
                </>

                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    criteria: state.criteriaReducer,
    showing: state.showing,
    userStepId: state.userJourney.find(step => {return step.order === 3})

});

export default connect(mapStateToProps)(Step3Client);