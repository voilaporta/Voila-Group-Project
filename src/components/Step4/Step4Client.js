import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step4Client extends Component {

    componentDidMount(){
        this.props.dispatch({type: 'GET_ACCEPTED_OFFER', payload: {userStepId: this.props.userStepId}})
    }

    render() {
        return (
            <div>
                {this.props.offerAccepted.loading ? 
                    <p>...loading...</p> 
                :
                    <>
                        {this.props.offerAccepted.length === 0 ? 
                            <p>No offers have been accepted at this time.</p> 
                        :
                            <>
                                <pre>{JSON.stringify(this.props.offerAccepted)}</pre>
                                Congrats! Your offer of {this.props.offerAccepted.price} with {this.props.offerAccepted.downpayment} was accepted!
                                <strong>NOTE:</strong> Please check back frequently as there will be serveral time-sensitive steps to follow.
                                <br/>
                                {this.props.offerAccepted.address}
                            </>
                        }
                    </>
                } 
            </div>
        );
    }
}

const mapStateToProps = state => ({
    offerAccepted: state.offerAccepted,
});

export default connect(mapStateToProps)(Step4Client);