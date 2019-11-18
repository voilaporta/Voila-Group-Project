import React, { Component } from 'react';
import { connect } from 'react-redux';
// Material UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        width: 250
    },
  });

class Step11Client extends Component {

    componentDidMount() {
        this.getClosingDetails();
    }

    // fetch closing details inputted by the Admin
    getClosingDetails = () => {
        this.props.dispatch({
            type: 'FETCH_CLOSING_DATA',
            payload: this.props.userStepId
        })
    }

    render() {

        // map through the closing details for specific user
        const closingDetails = this.props.closing.map( (close) => {
            return (  
                <>
                    <TextField label="Location" value={close.location} multiline rows="3" variant="filled" InputProps={{readOnly: true,}} />
                    <TextField label="Date" value={close.date} multiline rows="1" variant="filled" InputProps={{readOnly: true,}} />
                    <TextField label="Time" value={close.time} multiline rows="1" variant="filled" InputProps={{readOnly: true,}} />
                    <TextField label="Things to Bring" value={close.toBring} multiline rows="3" variant="filled" InputProps={{readOnly: true,}} />
                </>
            )
        })

        return (
            <div>
                {/* <p>{JSON.stringify(this.props.closing)}</p> */}
                {this.props.closing.length === 0 ?
                    <h2>Your agent will list the closing details.</h2>
                :
                <div>
                    {closingDetails}
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    closing: state.closing,
});

Step11Client.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(Step11Client));