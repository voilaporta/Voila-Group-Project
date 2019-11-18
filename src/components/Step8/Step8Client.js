import React, { Component } from 'react';
import { connect } from 'react-redux';

import {CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


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

class Step8Client extends Component {
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
                <h1>This step is handled by your lender. Voila will update this page as progress is made.</h1>
                <div>Appraisal:
                    <div>
                        {!this.props.appraisal.values[0].requested ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Requested
                    </div>

                    <div>
                        {!this.props.appraisal.values[0].scheduled ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Scheculed
                    </div>

                    <div>
                        {!this.props.appraisal.values[0].completed ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        Appraisal Completed</div>
                </div>

                <div>Title:
                    <div>
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

export default withStyles(styles) (connect(mapStateToProps)(Step8Client));