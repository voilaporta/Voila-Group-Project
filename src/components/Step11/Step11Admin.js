import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Button }from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

// material-ui-pickers
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

// Moment JS
import Moment from 'moment';
const moment = Moment;

const styles = theme => ({
    textField: {
        width: 250
    },
    buttonpadding: {
        marginBottom: 15
    }
  });

class Step11Admin extends Component {

    state = {
        userStepId: this.props.userStepId,
        location: '',
        date: new Date(),
        time: '',
        toBring: ''
    }

    // sets the state of date to selected date
       handleDateChange = date => {
            this.setState({
                date: date
            });
        console.log('in HANDLE DATE CHANGE', this.state)
        };
    
        handleChange= propertyName => (event) => {
            this.setState({
              [propertyName]: event.target.value,
            });
            console.log('in handleChange', this.state)
         }
    
        // submits the data to post in the database
        handleComplete = () => {
            console.log('--in HANDLE COMPLETE --', this.state)
            this.props.dispatch({
                type: 'POST_CLOSING_DATA',
                payload:{
                    userStepId: this.props.userStepId,
                    location: this.state.location,
                    date: this.state.date = moment(this.state.date).format('MMM Do YYYY'),
                    time: this.state.time,
                    toBring: this.state.toBring
                }
            })
            this.setState({
                userStep_id: this.props.userStepId,
                location: '',
                date: new Date(),
                time: '',
                toBring: ''
            });
        } 

    render() {

        const { classes } = this.props;

        return (
            <div>
                <TextField
                    label="Location"
                    value={this.state.location}
                    onChange={this.handleChange('location')}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                        }}
                    multiline
                    rows="4"
                    className={classes.textField}
                    variant="outlined"
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid >
                        <DatePicker
                            label="Date picker"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            format="MMM d yyyy"
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <form className="step9Form" >
                    <TextField
                        label="Time"
                        value={this.state.time}
                        onChange={this.handleChange('time')}
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                    <br />
                    <TextField
                        label="Things to Bring"
                        multiline
                        rows="4"
                        value={this.state.toBring}
                        onChange={this.handleChange('toBring')}
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    />
                </form>
                <Button className={classes.buttonpadding} onClick={this.handleComplete} variant="outlined">Submit</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

Step11Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(Step11Admin));