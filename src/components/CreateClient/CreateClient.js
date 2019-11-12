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

class CreateClient extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        dropbox_url: '',
        agent_id: '',
        isBuyer: true
    }

    handleChange = (event, keyname) => {
        this.setState({...this.state, [keyname]: event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
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
                        onChange={(event) => { this.handleChange(event, 'lastName') }}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        label="Username"
                        placeholder="e.g. janedoe"
                        onChange={(event) => { this.handleChange(event, 'username') }}
                        margin="dense"
                        variant="outlined"
                    />
                    <TextField
                        label="Password"
                        placeholder="Client will change upon first login"
                        onChange={(event) => { this.handleChange(event, 'password') }}
                        margin="dense"
                        variant="outlined"
                    />
                    <FormControl>
                        <InputLabel id="selectAgentLabel">Agent</InputLabel>
                        <Select
                            labelId="selectAgentLabel"
                            onChange={(event) => {this.handleChange(event, 'agent_id')}}
                            value={this.state.agent_id}
                        >
                            <MenuItem value={3}>James</MenuItem>
                            <MenuItem value={4}>Andrew</MenuItem>
                            <MenuItem value={5}>Meredith</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Dropbox URL"
                        placeholder="Copy and paste dropbox url"
                        onChange={(event) => { this.handleChange(event, 'dropbox_url') }}
                        margin="dense"
                        variant="outlined"
                    />
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch checked={this.state.isBuyer} onChange={() => this.setState({...this.state, isBuyer: !this.state.isBuyer})} />
                            }
                            label="Start Buyer Journey?"
                        />
                    </FormGroup>
                    <Button
                        variant="contained"
                        onClick={() => this.handleSubmit()}
                        color="secondary"
                        style={styles.submitBtn}
                    >
                        Add Client
                    </Button>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default withRouter(connect(mapStateToProps)(CreateClient));