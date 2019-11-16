import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fab from '@material-ui/core/Fab';
import {Add as AddIcon, CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';
import AddInsurance from './AddInsurance';

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
        this.props.dispatch({type: 'GET_INSURANCE'}); //call to vendorSaga
        this.props.dispatch({type: 'GET_USER_INSURANCE', payload:{user_step_id:this.props.userStepId}})
    }

    render() {
        const { classes } = this.props;
        //if vendorList has not yet loaded, display page loading
        if(this.props.vendorList[0].loading){
            return <div>...loading...</div>
        }
        //loop through inspection vendors from redux store (vendorList)
        //to display each individual vendor name in select
        const insurance = this.props.vendorList.map((insurance)=>{
            return <MenuItem 
                        key={insurance.id}
                        value={insurance.id}>{insurance.companyName}</MenuItem>
        })
        return (
            
            <div>
                <h1>Use one of our Insurance Partners or use your own</h1>
                <div className="insurancePartners">
                    <FormControl className={classes.select}>
                        <InputLabel id="selectInsurance">Insurance Partners</InputLabel>
                        <Select
                            labelId="selectInsurance"
                            onChange={(event) => {this.handleChange('insuranceId', event)}}
                            value={this.state.insuranceId}
                            >
                            <MenuItem value={''}>--View an Insurance Partner--</MenuItem>
                                {insurance}
                        </Select>
                    </FormControl>
                
                    {/* if an inspector has been selected from the list, show the contact info otherwise show nothing */}
                    {this.state.insuranceId ? <div>{this.displaySingleInsurance()}</div> : <div></div>}
                </div>
                <div>Add Your Insurance Information 
                    <Fab onClick={this.handleAdd} color="secondary" aria-label="Add" className={classes.fab} size="small">
                         <AddIcon />
                    </Fab> 
                </div>
                <div>
                    {!this.props.selectedInsurance.values.length ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                            <CheckCircleOutline className={classes.icon} color="secondary" /> }
                        
                    Insurance Aquired
                    { !this.props.selectedInsurance.values.length ? <div>Not Yet</div> :
                        <>
                        {/* selected vendors are returned from DB with most recent entry in first position of array */}
                        <p>Agent: {this.props.selectedInsurance.values[0].name}</p>
                        <p>Start Date: <Moment format="MM/DD/YYYY">
                            {this.props.selectedInsurance.values[0].insuranceStartDate}
                        </Moment></p> 
                        </>}
                </div>

                {this.state.open ? <AddInsurance userStepId ={this.props.userStepId} handleClose={this.handleClose} /> : <div></div>}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    vendorList: state.vendorList,
    selectedInsurance: state.selectedInsurance,
    userJourney: state.userJourney,
});

export default withStyles(styles) (connect(mapStateToProps)(Step7Client));