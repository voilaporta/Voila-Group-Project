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
                    {this.props.showing.values.length != 0 ? 
                    <>
                    Last showing requested: {this.props.showing.values.map(showing => {
                        return <>
                        Address: {''}
                        {showing.address}
                        <br/>
                        MLS #: {''}
                        {showing.MLS_number}
                        <br/>
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

                <div className="adminOfferMade">
                    {this.props.offerMade.length != 0 ?
                    <>
                    Offer Made:
                    {this.props.offerMade.map(offer => {
                        return <>
                        {offer.address}
                        {offer.price}
                        {offer.closingDate}
                        {offer.earnestMoney}
                        {offer.downPayment}
                        {offer.sellerPaidClosingCosts}
                        {offer.date_time_created}
                        </>
                    })}
                    </>
                    :
                    <>
                    Offers Made: {'User has not made an offer'}
                    </>
                }
                </div>
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