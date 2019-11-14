import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentToUpdate from './ComponentToUpdate';

class Step3Client extends Component {

    state = {
        user_step_id: this.props.userStepId,
        showComponentToUpdate: false,
        showCriteria: false,
        showRequest: false,
        showOffer: false
    }

   componentDidMount = () => {
    this.props.dispatch({type: 'GET_JOURNEY'});
    this.props.dispatch({type: 'GET_CRITERIA', payload: this.state.user_step_id});
    this.props.dispatch({type: 'GET_SHOWING', payload: this.state.user_step_id})
}

    addCriteria = () => {
        this.setState({
            showCriteria: true,
            showComponentToUpdate: true
        })
        // this.props.dispatch({type: 'POST_CRITERIA', payload: this.state.criteria})
    }

    requestShowing = () => {
        this.setState({
            showRequest: true,
            showComponentToUpdate: true
        })
    }

    makeOffer = () => {
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
                    {this.props.criteria.map(criteria => {
                        return <p key={criteria.id}>
                            {criteria.numRooms}
                            <br/>
                            {criteria.numBath}
                            <br/>
                            {criteria.numSF}
                            <br/>
                            {criteria.location}
                            <br/>
                            {criteria.notes}</p>
                        })}
                    <button onClick={this.addCriteria}>Add Criteria</button>


                </div>
            
                <div className="showing">
                    Recent showing requested:
                    <br/>
                     {this.props.showing.map(showing => {
                        return <p key={showing.id}>
                            {showing.address}
                            <br/>
                            {showing.MLS_number}
                        </p>
                        })}

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
    criteria: state.criteria,
    showing: state.showing,
});

export default connect(mapStateToProps)(Step3Client);