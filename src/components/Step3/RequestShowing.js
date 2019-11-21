import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';

class RequestShowing extends Component {

    state = {
        buyer_first_name: this.props.buyerFirstName,
        buyer_last_name: this.props.buyerLastName,
        user_step_id: this.props.userStepId.id,
        address: '',
        mls_number: ''  
    }

    componentDidMount = () => {
        this.props.dispatch({type: 'GET_SHOWING', payload: this.state.user_step_id})
    }

    handleChange = (event, input) => {
        this.setState({
            ...this.state,
            [input]: event.target.value
        })
    }

    makeRequest = () => {
        this.props.dispatch({type: 'POST_SHOWING', payload: this.state});
        this.props.dispatch({type: 'EMAIL_SHOWING', payload: this.state});
        this.props.requestShowingToggle();
    }

    cancel = () => {
        this.props.requestShowingToggle();
    }

    render() {
        return( 
            <div className="requestShowing">
                    <TextField
                    fullWidth
                    multiline
                    margin="dense"
                    label="Address"
                    placeholder="1000 Voila St. Voila, MN 112219"
                    type="text"
                    value={this.state.address} 
                    onChange={(event) => this.handleChange(event, 'address')} 
                    />

                    <TextField
                    fullWidth 
                    margin="dense"
                    label="MLS Number"
                    placeholder='Not sure what it is? Check "themlsonline.com/minnesota-real-estate" for more information!'
                    type="number"
                    value={this.state.mls_number} 
                    onChange={(event) => this.handleChange(event, 'mls_number')} 
                    />

                    <button onClick={this.makeRequest}>Make Request</button>
                    <button onClick={this.cancel}>Cancel</button>
                    <br/>
                    House requested:
                    {this.props.showing.values.map(showing => {
                        return <p key={showing.id}>
                            {showing.address}
                            <br/>
                            {showing.MLS_number}
                        </p>
                    })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showing: state.showing,
    userStepId: state.userJourney.find(step => {return step.order === 3})
});

export default connect(mapStateToProps)(RequestShowing);    