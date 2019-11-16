import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Step9Admin.css';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        location: '',
        date: new Date(),
        time: '',
        userStepId: this.props.userStepId
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
      // moment(date).format('MMM Do YYYY')

      handleComplete = () => {
        console.log('--in HANDLE COMPLETE --', this.state)
        this.props.dispatch({
            type: 'GET_FINAL_WALKTHROUGH',
            payload:             
            this.setState({
                location: this.state.location,
                date: moment(this.state.date).format('MMM Do YYYY'),
                time: this.state,
                userStepId: this.props.userStepId
            })
        })
        this.setState({
            location: '',
            date: new Date(),
            time: '',
            userStepId: this.props.userStepId
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
                    <Grid direction="column" margin="auto" alignItems="center" justify="center">
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

Step9Admin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(Step9Admin));