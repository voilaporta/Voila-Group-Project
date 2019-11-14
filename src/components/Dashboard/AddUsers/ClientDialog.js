import React, {Component} from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button,
        InputLabel, MenuItem, FormControl, FormControlLabel, Select, Switch } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
  
  const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
      dialogTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '1vh',
    },
    cancel: {
        float: 'right',
        marginTop: '5px',
        width: '20px'
    }
  });

class ClientDialog extends Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        dropboxUrl: '',
        agent_id: '',
        role_id: 3,
        journey: false,
    };

    // select from a list of agents
    changeAgent = event => {
        this.setState({ agent_id: event.target.value });
        console.log(this.state.agent_id)
        console.log(event.target.value)
    };

    // switch on Buyer Journey, true or false
    handleSwitch = journey => event => {
        this.setState({ [journey]: event.target.checked });
    };

    addClient = (event) => {
        this.props.dispatch({
            type: 'REGISTER',
            payload: {
                username: this.state.username,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                dropboxUrl: this.state.dropboxUrl,
                agent_id: this.state.agent_id,
                role_id: 3,
                journey: false,
            }
        })
    } 

    // Change the states with each input made
    handleChange= propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
            journey: event.target.checked
        });
     }
      
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
                    <DialogTitle className={classes.dialogTitle} id="form-dialog-title" >Add New Client <CancelIcon className={classes.cancel}/> </DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Username"
                        type="text"
                        fullWidth
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Password"
                        type="password"
                        fullWidth
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        />
                        <TextField
                        autoFocus
                        label="First Name"
                        type="text"
                        fullWidth
                        className={classes.textField}
                        value={this.state.firstName}
                        onChange={this.handleChange('firstName')}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Last Name"
                        type="text"
                        fullWidth
                        value={this.state.lastName}
                        onChange={this.handleChange('lastName')}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        label="DropBox Url"
                        type="text"
                        fullWidth
                        value={this.state.dropboxUrl}
                        onChange={this.handleChange('dropboxUrl')}
                        />
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="agent">Select Agent</InputLabel>
                            <Select
                                value={this.state.agent_id}
                                onChange={this.handleChange('agent_id')}
                                inputProps={{
                                name: 'agent_id',
                                }}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={'Ben'}>Ben</MenuItem>
                                <MenuItem value={'Jerry'}>Jerry</MenuItem>
                                <MenuItem value={'Icecream'}>Icecream</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                checked={this.state.journey}
                                onChange={this.handleChange('journey')}
                                value={this.state.journey}
                                />
                            }
                            label="Start Buyer Journey"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={this.props.handleClose} color="secondary">
                        Cancel
                        </Button>
                        <Button variant="contained" onClick={this.props.handleClose} color="secondary">
                        <SaveIcon className={(classes.leftIcon, classes.iconSmall)} />
                        Add Client
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default withStyles(styles) (connect(mapStateToProps) (ClientDialog));