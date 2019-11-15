import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// material-ui-pickers
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

import Moment from 'moment';

const moment = Moment;

const styles = theme => ({
    container: {
    align: 'center',
    // [theme.breakpoints.down('sm')]: {
    //     marginRight: 250,
    //     marginLeft: 38,
    //     justifyContent: 'center'
    //     },
    [theme.breakpoints.down('md')]: {
        // marginRight: 250,
        // marginLeft: 38,
        justifyContent: 'center'
        },
    },
    grid: {
        // width: '60%',
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
        date: new Date(),
      };
    
         handleDateChange = date => {
            this.setState({
                date: date
            });
        console.log('in HANDLE DATE CHANGE', this.state)
      };

      // moment(date).format('MMM Do YYYY')

    render() {

        const { classes } = this.props;

        return (
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid 
                 direction="column" margin="auto"
                    alignItems="center"
                    justify="center"
                >
                        <DatePicker
                            label="Date picker"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            format="MMM d yyyy"
                            className={classes.textField}
                            align="center"
                        />
                    </Grid>
                </MuiPickersUtilsProvider>
                <form className={classes.container} >
                <TextField
                    label="Time"
                    type="time"
                    defaultValue="07:30"
                    className={classes.textField}
                    // InputLabelProps={{
                    // shrink: true,
                    // }}
                    inputProps={{
                    step: 300, // 5 min
                    style: {textAlign: 'center'}
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