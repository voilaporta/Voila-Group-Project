import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';


//Material UI
import {CheckCircleOutline, PanoramaFishEye} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { Select, FormControl, InputLabel, MenuItem} from '@material-ui/core';


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
class Step6Admin extends Component {

    state = {
        inspectionId: '',
        open: false,
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_INSPECTORS'});
        this.props.dispatch({type: 'GET_USER_INSPECTION', payload:{user_step_id:this.props.userStepId}})
    }

    handleChange = (propertyName, event)=>{
        this.setState({
            [propertyName]: event.target.value
          })
    }

    displaySingleInspector = ()=>{
        //display the vendor's contact information
        const inspectorToDisplay = this.props.inspectorList.values.find((inspector)=> inspector.id === Number(this.state.inspectionId));
        return <div>
                    <p>Name: {inspectorToDisplay.firstName} {inspectorToDisplay.lastName}</p>
                    <p>Company Name: {inspectorToDisplay.companyName}</p>
                    <p>Phone: {inspectorToDisplay.phoneNumber}</p>
                    <p>Email: {inspectorToDisplay.email}</p>
                    <p>Website: {inspectorToDisplay.website}</p>
                </div>
    }

    render() {

        const { classes } = this.props;

        if(this.props.inspectorList.loading){
            return <div>...loading...</div>
        }

        const inspectors = this.props.inspectorList.values.map((inspector)=>{
            return <MenuItem 
                        key={inspector.id}
                        value={inspector.id}>{inspector.companyName}</MenuItem>
            })

        return (
            <div>
                <h1>Inspection scheduled will be marked complete when the buyer adds inspection details</h1>
                <div className="inspectionPartners">
                    <FormControl className={classes.select}>
                        <InputLabel id="selectInspectors">Inspection Partners</InputLabel>
                        <Select
                            labelId="selectInspectors"
                            onChange={(event) => {this.handleChange('inspectionId', event)}}
                            value={this.state.inspectionId}
                            >
                            <MenuItem value={''}>--View an Inspection Partner--</MenuItem>
                                {inspectors}
                        </Select>
                    </FormControl>
                
                    {/* if an inspector has been selected from the list, show the contact info otherwise show nothing */}
                    {this.state.inspectionId ? <div>{this.displaySingleInspector()}</div> : <div></div>}
                </div>

                <div>
                    {!this.props.selectedInspector.values.length ? <PanoramaFishEye className={classes.icon} color="secondary"/> : 
                        <CheckCircleOutline className={classes.icon} color="secondary" /> }
                    
                    Inspection Scheduled:
                    { !this.props.selectedInspector.values.length ? <div>not yet</div> :
                    <>
                    {/* selected vendor is returned from DB with most recent entry in first position of array */}
                    <p>Name: {this.props.selectedInspector.values[0].name}</p>
                    <p>Date: <Moment format="MM/DD/YYYY">
                        {this.props.selectedInspector.values[0].inspectionDate}
                    </Moment></p> 
                    </>}

                </div>

                <div>
                    {this.props.userJourney[5].completed ? <CheckCircleOutline className={classes.icon} color="secondary" /> : 
                            <PanoramaFishEye className={classes.icon} color="secondary"/> }
                        Inspection Negotiated
                        
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    inspectorList: state.inspectorList,
    selectedInspector: state.selectedInspector,
    userJourney: state.userJourney,
});

export default withStyles(styles) (connect(mapStateToProps)(Step6Admin));