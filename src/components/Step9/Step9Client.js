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

class Step9Client extends Component {

    componentDidMount() {
        this.getWalkThrough();
    }

    // sends dispatch to Saga to get walkthrough details
    getWalkThrough = () => {
        this.props.dispatch({
            type: 'GET_FINAL_WALKTHROUGH',
            payload: this.props.userStepId
        })
        console.log(this.props.walkThrough)
    }

    render() {

        // map through the walkthrough details for specific user
        const walkThroughList = this.props.walkThrough.map( (walk) => {
            return (  
                <>
                    <TextField label="Location" value={walk.location} multiline rows="3" variant="filled" InputProps={{readOnly: true,}} />
                    <br />
                    <TextField label="Date" value={walk.date} multiline rows="1" variant="filled" InputProps={{readOnly: true,}} />
                    <br/>
                    <TextField label="Time" value={walk.time} multiline rows="1" variant="filled" InputProps={{readOnly: true,}} />
                </>
            )
        })

        return (
            <div>
                {walkThroughList}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    walkThrough: state.walkThrough,
});

Step9Client.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(Step9Client));