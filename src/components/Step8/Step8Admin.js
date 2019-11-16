import React, { Component } from 'react';
import { connect } from 'react-redux';


import {CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';

import Moment from 'react-moment';

const styles = theme => ({
    fab: {
      margin: theme.spacing.unit,
    },
    root: {
        color: theme.palette.text.primary,
    },
      icon: {
        margin: theme.spacing.unit,
        fontSize: 32,
    },
    select:{
        minWidth: 200
    }
  });
class Step8Admin extends Component {

    toggleTrue = ()=>{
        this.props.dispatch({type: 'UPDATE_APPRAISAL_REQUESTED', 
                            payload: {user_step_id: this.props.userStepId, 
                                        value: !this.props.appraisal.values[0].requested}})
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_APPRAISAL', payload:this.props.userStepId});
        this.props.dispatch({type: 'GET_TITLE', payload:this.props.userStepId});
    }
    render() {
        const { classes } = this.props;

        if(this.props.appraisal.loading){
            return <div>...loading...</div>
        }

        return (
            <div>
                <div>Appraisal:
                    <div role="button" onClick={this.toggleTrue}>
                        {!this.props.appraisal.values[0].requested ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Requested</div>
                    <div>Appraisal Scheculed</div>
                    <div>Appraisal Completed</div>
                </div>
                <div>Title:</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    appraisal: state.appraisal,
    title: state.title,
    userJourney: state.userJourney,
});

export default withStyles(styles) (connect(mapStateToProps)(Step8Admin));