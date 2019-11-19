import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step3Admin extends Component {

    state = {
        user_step_id: this.props.userStepId
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_CRITERIA', payload: this.state.user_step_id});
        this.props.dispatch({type: 'GET_SHOWING', payload: this.state.user_step_id});
        this.props.dispatch({type: 'GET_OFFER_MADE', payload: this.state.user_step_id});
    }

    render() {
        return (
            <div>
                <div className="showUser">
                    Current User: {this.props.buyerFirstName} {this.props.buyerLastName}
                </div>

                <div className="adminCriteria">
                    {this.props.criteria.length != 0 ? 
                    <>
                    User's criteria: 
                    <br/>
                    {this.props.criteria.map(criteria => {    
                        return <div className="criteria">
                            <p key={criteria.id}>
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
                                </div>
                            })}
                        
                        </>
                    :
                    <>
                    User's criteria: {'User has not added any search criteria'}
                    </>
                }
                </div>
                        

                <div className="adminRequestShowing">
                    {this.props.showing.length != 0 ? 
                    <>
                    Last showing requested: {this.props.showing.map(showing => {
                        return <>
                        {showing.address}
                        {showing.MLS_number}
                        {showing.date_time_created}
                        </>
                    })}
                    </>
                    :    
                    <>
                    Showings requested: {'User has not requested a showing yet'}
                    </> 
                    }
                    
                </div>

                {/* <div className="adminOfferMade">
                    Offer Made:
                </div>

                <button>Mark Complete</button> */} 

            </div>
        );
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing,
    offerMade: state.offerMade
});

export default connect(mapStateToProps)(Step3Admin);