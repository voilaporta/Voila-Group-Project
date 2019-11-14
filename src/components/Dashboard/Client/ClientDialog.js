import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button,
        InputLabel, MenuItem, FormControl, FormControlLabel, Select, Switch } from '@material-ui/core';
  
  const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
  });

class ClientDialog extends Component {

    state = {
        agent: '',
        journey: true,
    };

    // select from a list of agents
    changeAgent = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // switch on Buyer Journey, true or false
    handleSwitch = journey => event => {
        this.setState({ [journey]: event.target.checked });
    };

      
    render() {

        const { classes } = this.props;
        
        return (
            <div>
                <Dialog
                    open={this.props.state.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent dividers>
                    <DialogTitle id="form-dialog-title" >Add New Client</DialogTitle>
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
                        <TextField
                        autoFocus
                        margin="dense"
                        name="dropboxUrl"
                        label="DropBox Url"
                        type="text"
                        fullWidth
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="agent">Select Agent</InputLabel>
                            <Select
                                value={this.state.agent}
                                onChange={this.changeAgent}
                                inputProps={{
                                name: 'agent',
                                }}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ben</MenuItem>
                                <MenuItem value={20}>Jerry</MenuItem>
                                <MenuItem value={30}>Icecream</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                checked={this.state.journey}
                                onChange={this.handleSwitch('journey')}
                                value="journey"
                                />
                            }
                            label="Start Buyer Journey"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="primary">
                        Add Client
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles) (ClientDialog);