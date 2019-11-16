import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Step9Admin.css';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Button }from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

// material-ui-pickers
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

import Moment from 'moment';

const moment = Moment;

const styles = theme => ({
    container: {
    align: 'center',
    [theme.breakpoints.down('md')]: {
        justifyContent: 'center'
        },
    },
    grid: {
        align: 'center',
        justify: 'center',
        margin: 'auto'
      },
    root: {
        flexGrow: 1,
        textAlign: 'center',
        align: 'center',
		justify: 'center',
    },
  });

class Step9Admin extends Component {

    state = {
        // The first commit of Material-UI
        userStep_id: this.props.userStepId,
        location: '',
        date: new Date(),
        time: '',
      };
    
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
            type: 'POST_FINAL_WALKTHROUGH',
            payload:{
                userStep_id: this.props.userStepId,
                location: this.state.location,
                date: this.state.date = moment(this.state.date).format('MMM Do YYYY'),
                time: this.state.time,
            }
        })
        this.setState({
            userStep_id: this.props.userStepId,
            location: '',
            date: new Date(),
            time: '',
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
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container direction="column" margin="auto" alignItems="center" justify="center">
                        <DatePicker
                            label="Date picker"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            format="MMM d yyyy"
                            align="center"
                            InputLabelProps={{
                                shrink: true,
                              }}
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
                </form>
                <Button onClick={this.handleComplete} variant="outlined">Submit</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    walkThrough: state.walkThrough
});

Step9Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(Step9Admin));