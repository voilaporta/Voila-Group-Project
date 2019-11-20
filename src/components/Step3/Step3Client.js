import React, { Component } from 'react';
import { connect } from 'react-redux';
import ComponentToUpdate from './ComponentToUpdate';

class Step3Client extends Component {

    state = {
        buyer_first_name: this.props.buyerFirstName,
        buyer_last_name: this.props.buyerLastName,
        user_step_id: this.props.userStepId,
        showComponentToUpdate: false,
        showCriteria: false,
        showRequest: false,
        showOffer: false
    }

   componentDidMount = () => {
    this.props.dispatch({type: 'GET_JOURNEY'});
    this.props.dispatch({type: 'GET_CRITERIA', payload: this.state.user_step_id});
    this.props.dispatch({type: 'GET_SHOWING', payload: this.state.user_step_id});
}

    addCriteriaToggle = () => {
        this.setState({
            showCriteria: !this.state.showCriteria,
            showComponentToUpdate: !this.state.showComponentToUpdate
        })
    }

    updateCriteriaToggle = () => {
        this.setState({
            showCriteria: !this.state.showCriteria,
            showComponentToUpdate: !this.state.showComponentToUpdate
        })
    }

    requestShowingToggle = () => {
        this.setState({
            showRequest: !this.state.showRequest,
            showComponentToUpdate: !this.state.showComponentToUpdate
        })
    }

    makeOfferToggle = () => {
        this.setState({
            showOffer: !this.state.showOffer,
            showComponentToUpdate: !this.state.showComponentToUpdate
        })
    }

    render() { 

        if(this.props.showing[0].loading){
            return <div>loading</div>
        }
        
        return (
            <div>
                {this.state.showComponentToUpdate ? <ComponentToUpdate addCriteriaToggle={this.addCriteriaToggle} makeOfferToggle={this.makeOfferToggle} requestShowingToggle={this.requestShowingToggle} updateCriteriaToggle={this.updateCriteriaToggle} 
                buyerFirstName={this.state.buyer_first_name} buyerLastName={this.state.buyer_last_name} 
                showCriteria={this.state.showCriteria} showRequest={this.state.showRequest} showOffer={this.state.showOffer}/> : 
                <div className="componentToShow">
                    <div className="criteria">
                        Current Criteria:
                        <br/>
                        {this.props.criteria.map(criteria => {
                            return <p key={criteria.id}>
                                Bedroom Count: {''}  
                                {criteria.numRooms}
                                <br/>
                                Bathroom Count: {''}
                                {criteria.numBath}
                                <br/>
                                Square Feet: {''}
                                {criteria.numSF}
                                <br/>
                                Location: {''}
                                {criteria.location}
                                <br/>
                                Additional Comments: {''}
                                {criteria.notes}</p>
                            })}
                            {this.props.criteria != '' ? <button onClick={this.updateCriteriaToggle}>Update Criteria</button> :  
                        <button onClick={this.addCriteriaToggle}>Add Criteria</button>
                            }
                    </div>
            
                <div className="showing">
                    Last showing requested:
                    <br/>
                    {this.props.showing[0].address} 
                    <br/>
                    <button onClick={this.requestShowingToggle}>Request a showing</button>
                </div>
                <button onClick={this.makeOfferToggle}>Make Offer</button>
                </div>

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