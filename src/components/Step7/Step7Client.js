import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import {Add as AddIcon, CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import AddInspection from './AddInspection';
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


class Step7Client extends Component {

    state = {
        insuranceId: '',
        open: false,
    }

    handleChange = (propertyName, event)=>{
        this.setState({
            [propertyName]: event.target.value
          })
    }

    handleAdd = () => {
        this.setState({
            open: true
        })
    }
    handleClose= () =>{
        this.setState({
            open: false,
        })
    }

    displaySingleInsurance = ()=>{
        //display the vendor's contact information
        const insuranceToDisplay = this.props.vendorList.find((insurance)=> insurance.id === Number(this.state.insuranceId));
        return <div>
                    <p>Name: {insuranceToDisplay.firstName} {insuranceToDisplay.lastName}</p>
                    <p>Company Name: {insuranceToDisplay.companyName}</p>
                    <p>Phone: {insuranceToDisplay.phoneNumber}</p>
                    <p>Email: {insuranceToDisplay.email}</p>
                    <p>Website: {insuranceToDisplay.website}</p>
                </div>
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_INSPECTORS'});
        this.props.dispatch({type: 'GET_USER_INSPECTION', payload:{user_step_id:this.props.userStepId}})
    }

    render() {
        return (
            <div>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    vendorList: state.vendorList,
    selectedVendor: state.selectedVendor,
    userJourney: state.userJourney,
});

export default withStyles(styles) (connect(mapStateToProps)(Step7Client));