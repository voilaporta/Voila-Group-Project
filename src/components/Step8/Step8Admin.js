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

    toggleTrue = (type)=>{
        switch(type){
            case 'request':
                this.props.dispatch({type: 'UPDATE_APPRAISAL_REQUESTED', 
                    payload: {user_step_id: this.props.userStepId, 
                            value: !this.props.appraisal.values[0].requested}});
                break;
            case 'schedule':
                this.props.dispatch({type: 'UPDATE_APPRAISAL_SCHEDULED', 
                    payload: {user_step_id: this.props.userStepId, 
                            value: !this.props.appraisal.values[0].scheduled}});
                break;
            case 'complete':
                    this.props.dispatch({type: 'UPDATE_APPRAISAL_COMPLETED', 
                        payload: {user_step_id: this.props.userStepId, 
                                value: !this.props.appraisal.values[0].completed}});
                    break;
            case 'titleOrdered':
                    this.props.dispatch({type: 'UPDATE_TITLE_ORDERED', 
                        payload: {user_step_id: this.props.userStepId, 
                                value: !this.props.title.values[0].ordered}});
                    break;
            default:
                console.log('error changing the status of:', type)
        }
        
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_APPRAISAL', payload:this.props.userStepId});
        this.props.dispatch({type: 'GET_TITLE', payload:this.props.userStepId});
    }
    render() {
        const { classes } = this.props;

        if(this.props.appraisal.loading || this.props.title.loading){
            return <div>...loading...</div>
        }

        return (
            <div>
                <div>Appraisal:
                    <div role="button" onClick={()=>{this.toggleTrue('request')}}>
                        {!this.props.appraisal.values[0].requested ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Requested</div>

                    <div role="button" onClick={()=>{this.toggleTrue('schedule')}}>
                        {!this.props.appraisal.values[0].scheduled ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Scheculed</div>

                    <div role="button" onClick={()=>{this.toggleTrue('complete')}}>
                        {!this.props.appraisal.values[0].completed ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Completed</div>
                </div>
                <div>Title:
                    <div role="button" onClick={()=>{this.toggleTrue('titleOrdered')}}>
                        {!this.props.title.values[0].ordered ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Title Ordered</div>

                    <div>
                    {this.props.userJourney[7].completed ? <CheckCircleOutline className={classes.icon} color="secondary" /> : 
                            <PanoramaFishEye className={classes.icon} color="secondary"/> }
                    Title Completed</div>
                </div>
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