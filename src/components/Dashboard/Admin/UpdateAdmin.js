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

class UpdateAdmin extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        adminType: '',
       id: this.props.match.params.id
    }

componentDidMount=()=>{
    this.getAdmin();
    this.getAdminType();
}
getAdmin=()=>{
    this.props.dispatch({type:'FETCH_ADMIN'})
}

getAdminType=()=>{
    this.props.dispatch({type:'GET_ADMIN_TYPE'})
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
        if(this.state.firstName && this.state.lastName && this.state.email && this.state.adminType)
        this.props.dispatch({
            type: 'UPDATE_ADMIN',
            payload:  this.state
            
        })
   
    }


    handleDelete=()=>{
        console.log('hello from delete admin button!!!!');
        this.props.history.push('/')
        this.props.dispatch({ type: 'DELETE_ADMIN', payload: this.state.id});
        console.log('helllooooo from delete',this.state.id);
        
    }

    render() {
        const adminTypes= this.props.state.adminTypeReducer.map((type)=>{
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
                        label="Email"
                        placeholder="Emaill"
                        value={this.state.email}
                        onChange={(event) => { this.handleChange(event, 'email') }}
                        margin="dense"
                        variant="outlined"
                    />
                     <FormControl>
                        <InputLabel id="selectAdminTypeLabel">Admin Type</InputLabel>
                        <Select
                            labelId="selectAdminTypeLabel"
                            onChange={(event) => {this.handleChange(event, 'adminType')}}
                            value={this.state.adminType}
                        >
                            <MenuItem value={''}>--Select An Admin Type--</MenuItem>
                                {adminTypes}
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={() => this.handleSubmit()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                        Update Admin
                    </Button>
                    <br></br>
                    <Button
                        variant="contained"
                        onClick={() => this.handleDelete()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                        Delete Admin
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

export default withRouter(connect(mapStateToProps)(UpdateAdmin));
