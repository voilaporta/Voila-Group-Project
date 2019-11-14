import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Select, FormControl, InputLabel, MenuItem, Button, FormGroup, FormControlLabel, Switch, } from '@material-ui/core';
import {withRouter } from 'react-router-dom';

const styles = {
    formContainer: {
        margin: '25px'
    },
    submitBtn: {
        position: 'relative',
        bottom: -30
    }
}

class UpdateVendor extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        companyName:'',
        phoneNumber:'',
        email: '',
        website:'',
        vendorTypeId: '',
       id: this.props.match.params.id
    }

componentDidMount=()=>{
    this.getVendor();
    this.getVendorType();
}
getVendor=()=>{
    this.props.dispatch({type:'FETCH_VENDOR'})
}
getVendorType=()=>{
    this.props.dispatch({type:'GET_VENDOR_TYPE'})
}


handleChange = (event, keyname) => {
        this.setState({
            ...this.state, 
            [keyname]: event.target.value,
        })
        console.log(this.state);
        
    }

    handleSubmit = () => {
        console.log('hellooooo ',this.state);
        
        this.props.history.push('/')
        if(this.state.firstName && this.state.lastName && this.state.companyName && this.state.phoneNumber && this.state.email&& this.state.vendorTypeId)
        this.props.dispatch({
            type: 'UPDATE_VENDOR',
            payload:  this.state
            
        })
   
    }

    handleDelete=()=>{
        console.log('hello from delete button!!!!');
        this.props.history.push('/')
        this.props.dispatch({ type: 'DELETE_VENDOR', payload: this.state.id});
        console.log('helllooooo from delete',this.state.id);
        
    }
    render() {
        const vendorType= this.props.state.vendorTypeReducer.map((type)=>{
            return <MenuItem value={type.id}
                            key={type.id}> {type.name}</MenuItem>
          })
        return (
            <div style={styles.formContainer}>
                <FormControl fullWidth>
                    <TextField
                        label="First name"
                        placeholder="e.g. Jane"
                        value={this.state.firstName}
                        onChange={(event) => {this.handleChange(event, 'firstName')}}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        label="Last name"
                        placeholder="e.g. Doe"
                        value={this.state.lastName}
                        onChange={(event) => { this.handleChange(event, 'lastName') }}
                        margin="dense"
                        variant="outlined"
                    />
     
           
                    <TextField
                        label="Company Name"
                        placeholder="Company Name"
                        value={this.state.companyName}
                        onChange={(event) => { this.handleChange(event, 'companyName') }}
                        margin="dense"
                        variant="outlined"
                    />
                <TextField
                        label="Phone"
                        placeholder="Phone"
                        value={this.state.phoneNumber}
                        onChange={(event) => { this.handleChange(event, 'phoneNumber') }}
                        margin="dense"
                        variant="outlined"
                    />
                        <TextField
                        label="Email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => { this.handleChange(event, 'email') }}
                        margin="dense"
                        variant="outlined"
                    />
                        <TextField
                        label="Website"
                        placeholder="Website"
                        value={this.state.website}
                        onChange={(event) => { this.handleChange(event, 'website') }}
                        margin="dense"
                        variant="outlined"
                    />
                        <FormControl>
                        <InputLabel id="selectVendorTypeLabel">Vendor Type</InputLabel>
                        <Select
                            labelId="selectVendorTypeLabel"
                            onChange={(event) => {this.handleChange(event, 'vendorTypeId')}}
                            value={this.state.vendorTypeId}
                        >
                            <MenuItem value={''}>--Select An Vendor Type--</MenuItem>
                                {vendorType}
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={() => this.handleSubmit()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                        Update Vendor
                    </Button>
                    <br></br>
                         <Button
                        variant="contained"
                        onClick={() => this.handleDelete()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                       Delete Vendor
                    </Button>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,

    state
});

export default withRouter(connect(mapStateToProps)(UpdateVendor));
