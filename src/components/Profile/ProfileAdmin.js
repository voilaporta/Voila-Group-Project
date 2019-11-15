import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
    TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button,
    InputLabel, MenuItem, FormControl, FormControlLabel, Select, Switch
} from '@material-ui/core';
import Swal from 'sweetalert2'
import SaveIcon from '@material-ui/icons/Save';
import ProfileInfo from './ProfileInfo';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});

// stop tab key from closing the dialog box
const stopPropagationForTab = (event) => {
    if (event.key == "p") {
        event.stopPropagation();
    }
    };

class ProfileAdmin extends Component {
    state = {
        showpassword: false,
        password: '',
        id:this.props.user.id
    }

    handleChange = (event, keyname) => {
        this.setState({
            ...this.state, 
            [keyname]: event.target.value,
        })
        console.log(this.state);
        
    }

    savePassword=()=>{
        console.log('helllooo frommm the save password button!!!!!!!');
        this.props.dispatch({
            type: 'UPDATE_CLIENT',
            payload:  this.state
            
        })
        console.log(this.state);
        
        
    }
    showPassword=()=>{
        this.setState({
                showpassword: true,
        })
    }
    render() {

        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.state}
                    onClose={this.props.handleClose}
                    onKeyDown={stopPropagationForTab}
                    aria-labelledby="form-dialog-title"
                    
                >
                    <DialogContent dividers>
                        <DialogTitle id="form-dialog-title" >Profile</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        <ProfileInfo />
                        {this.state.showpassword ?
                        <>
                            <TextField
                                label="Password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={(event) => { this.handleChange(event, 'password') }}
                                autoFocus
                                margin="dense"
                                type="text"
                                fullWidth
                            /> <Button variant="outlined" color="secondary" onClick={this.savePassword}>Save</Button></>:
                            <Button variant="outlined" color="secondary" onClick={this.showPassword}>
                                Change Password
                        </Button>
                        }
                    </DialogContent>

                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user,
    agent: state.agent,
    state
});

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ProfileAdmin)));