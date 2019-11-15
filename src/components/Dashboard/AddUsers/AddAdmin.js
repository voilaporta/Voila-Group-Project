import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button,
        InputLabel, MenuItem, FormControl, Select, } from '@material-ui/core';
  
  const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 180,
      },
  });

// stop tab key from closing the dialog box
const stopPropagationForTab = (event) => {
    if (event.key === "Tab") {
        event.stopPropagation();
    }
    };

class AddAdminDialog extends Component {

    state= {
        adminType: ''
    }

    // select from a list of agents
    changeAdminType = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    };
      
    render() {

        const { classes } = this.props;
        
        return (
            <div>
                <Dialog
                    open={this.props.state.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                    onKeyDown={stopPropagationForTab}
                >
                    <DialogContent dividers>
                    <DialogTitle id="form-dialog-title" >Add New Admin</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                        autoFocus
                        name="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
                        className={classes.textField}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="lastName"
                        label="Last Name"
                        type="text"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="agent">Select Admin Type</InputLabel>
                            <Select
                                value={this.state.adminType}
                                onChange={this.changeAdminType}
                                inputProps={{
                                name: 'adminType',
                                }}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Agent</MenuItem>
                                <MenuItem value={20}>Team Member</MenuItem>
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary">
                        Add Admin
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (AddAdminDialog);