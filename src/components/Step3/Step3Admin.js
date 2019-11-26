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

        if(this.props.showing.loading){
            return <div>loading...</div>
        }

        return (
            <div>
                <div className="showUser">
                    <h1>Current User:</h1> <b>{this.props.buyerFirstName} {this.props.buyerLastName}</b>
                </div>

                <div className="adminCriteria">
                    {this.props.criteria.length !== 0 ? 
                    <>
                    <h1>User's criteria:</h1> 
                    {this.props.criteria.map(criteria => {    
                        return <div className="criteria">
                            <p key={criteria.id}>
                                Bedroom Count: {''}  
                                <b>{criteria.numRooms}</b>
                                <br/>
                                Bathroom Count: {''}
                                <b>{criteria.numBath}</b>
                                <br/>
                                Square Feet: {''}
                                <b>{criteria.numSF}</b>
                                <br/>
                                Location: {''}
                                <b>{criteria.location}</b>
                                <br/>
                                Additional Comments: {''}
                                <b>{criteria.notes}</b>
                                </p>
                            </div>
                            })}
                        </>
                    :
                    <>
                    <h1>User's criteria:</h1> {'User has not added any search criteria'}
                    </>
                }
                </div>
                <div className="adminRequestShowing"> 
                    <>
                        <h1>Last showing requested:</h1> 
                        {this.props.showing.values.length ? 
                        <>
                            {this.props.showing.values[0].address}
                            <br/>
                            MLS #: {''}
                            <b>{this.props.showing.values[0].MLS_number}</b>
                        </>
                        :    
                        <>
                            {'User has not requested a showing yet'}
                        </>
                    }
                    </>
                </div>
                <div className="adminOfferMade">
                    {this.props.offerMade.length !== 0 ?
                    <>
                    <h1>Offer Made:</h1>
                    {this.props.offerMade.map(offer => {
                        return <div key={offer.id}>
                        {offer.address}
                        {offer.price}
                        {offer.closingDate}
                        {offer.earnestMoney}
                        {offer.downPayment}
                        {offer.sellerPaidClosingCosts}
                        </div>
                    })}
                    </>
                    :
                    <>
                    <h1>Offers Made:</h1> {'User has not made an offer'}
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