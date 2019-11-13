import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from './ClientItem'

import AddButton from '../AddButton/AddButton';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
  
  const styles = theme => ({
    // paper: {
    //   position: 'absolute',
    //   paddingTop: '20vh',
    //   width: '35vw',
    //   height: '39vh',
    //   backgroundColor: theme.palette.background.paper,
    //   boxShadow: theme.shadows[5],
    //   padding: theme.spacing.unit * 4,
    //   outline: 'none',
    //   [theme.breakpoints.down('sm')]: {
    //     paddingTop: '20vh',
    //     width: '100vw',
    //     height: '30vh',
    // },
    // [theme.breakpoints.down('md')]: {
    //     paddingTop: '25vh',
    //     width: '50vw',
    //     height: '34vh',
    // },
    // },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },
  });

class Client extends Component {

    state = {
        open: false,
        age: '',
        checkedA: true,
        checkedB: true,
    };
    
    handleClose = () => {
    this.setState({ open: false });
    };

    handleAdd = () => {
    this.setState({ open: true });
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSwitch = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    componentDidMount() {
        // use component did mount to dispatch an action to request the client list from the API
    this.getClients();
    }
    getClients(){
        this.props.dispatch({type: 'FETCH_CLIENT'})
    }

    render() {
        const { classes } = this.props;

        return (
            <div classes={classes.root}>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.clientList.map((client) => {
                            return (
                                <ClientItem key={client.id} client={client} getClients={this.getClients} />
                            )
                        })}
                    </tbody>
                </table>
                <AddButton handleAdd={this.handleAdd} />
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogContent dividers>
                    <DialogTitle id="form-dialog-title" >Add New Client</DialogTitle>
                    </DialogContent>
                    <DialogContent>
                        {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send
                        updates occasionally.
                        </DialogContentText> */}
                        <TextField
                        autoFocus
                        margin="dense"
                        name="firstName"
                        label="First Name"
                        type="text"
                        fullWidth
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
                            <InputLabel htmlFor="age-simple">Select Agent</InputLabel>
                            <Select
                                value={this.state.age}
                                onChange={this.handleChange}
                                inputProps={{
                                name: 'age',
                                id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Switch
                                checked={this.state.checkedA}
                                onChange={this.handleSwitch('checkedA')}
                                value="checkedA"
                                />
                            }
                            label="Start Buyer Journey"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                        Add Client
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
    state
});

export default withStyles(styles) (connect(mapStateToProps)(Client));