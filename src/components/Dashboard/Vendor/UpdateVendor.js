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
        phone:'',
        email: '',
        website:'',
        vendorTypeId: '',
       id: this.props.match.params.id
    }

componentDidMount=()=>{
    this.getVendor();
}
getVendor=()=>{
    this.props.dispatch({type:'FETCH_VENDOR'})
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
        if(this.state.firstName && this.state.lastName && this.state.companyName && this.state.phone && this.state.email&& this.state.vendorTypeId)
        this.props.dispatch({
            type: 'UPDATE_VENDOR',
            payload:  this.state
            
        })
   
    }

    render() {
        const agentOptions= this.props.state.agent.map((agent)=>{
            return <MenuItem value={agent.id}
                            key={agent.id}> {agent.firstName}</MenuItem>
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
                        value={this.state.phone}
                        onChange={(event) => { this.handleChange(event, 'phone') }}
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
                        <TextField
                        label="Vendor Type"
                        placeholder="Vendor Type"
                        value={this.state.adminType}
                        onChange={(event) => { this.handleChange(event, 'vendorType') }}
                        margin="dense"
                        variant="outlined"
                    />
                    <Button
                        variant="contained"
                        onClick={() => this.handleSubmit()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                        Update Vendor
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
