import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Select, FormControl, InputLabel, MenuItem, Button, FormGroup, FormControlLabel, Switch, } from '@material-ui/core';
import {withRouter } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2'
import SaveIcon from '@material-ui/icons/Save';

const styles = {
    formContainer: {
        margin: '25px'
    },
    submitBtn: {
        position: 'relative',
        bottom: -30
    },
    select:{
        minWidth: 120
    }
}

class UpdateAdmin extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        adminType: '',
       id: this.props.adminId
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
        Swal.fire(
            'Success!',
            'Admin has been updated!',
            'success'
          )
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
          const { classes } = this.props;
        return (
            <div >
                     <Dialog
                    open={this.props.state}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent dividers>
                    <DialogTitle id="form-dialog-title" >Update Client</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                    <TextField
                        label="First name"
                        placeholder="e.g. Jane"
                        value={this.state.firstName}
                        onChange={(event) => {this.handleChange(event, 'firstName')}}
                        autoFocus
                        margin="dense"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        label="Last name"
                        placeholder="e.g. Doe"
                        value={this.state.lastName}
                        onChange={(event) => { this.handleChange(event, 'lastName') }}
                        autoFocus
                        margin="dense"
                        type="text"
                        fullWidth
                    />
     
           
                    <TextField
                        label="Email"
                        placeholder="Emaill"
                        value={this.state.email}
                        onChange={(event) => { this.handleChange(event, 'email') }}
                        autoFocus
                        margin="dense"
                        type="text"
                        fullWidth
                    />
                     <FormControl className={classes.select}>
                        <InputLabel id="selectAdminTypeLabel">Admin  Type</InputLabel>
                        <Select
                            labelId="selectAdminTypeLabel"
                            onChange={(event) => {this.handleChange(event, 'adminType')}}
                            value={this.state.adminType}
                        >
                            <MenuItem value={''}>--Select An Admin Type--</MenuItem>
                                {adminTypes}
                        </Select>
                    </FormControl>

                    </DialogContent>
                    <DialogActions>
                    <Button variant="outlined" onClick={this.props.handleClose} color="secondary">
                        Cancel
                        </Button>
                        <Button variant="contained" onClick={this.addClient} color="secondary">
                        <SaveIcon className={(classes.leftIcon, classes.iconSmall)} />
                        Update Admin
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,

    state
});

export default withStyles(styles) (withRouter(connect(mapStateToProps)(UpdateAdmin)));
