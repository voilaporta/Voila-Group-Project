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

class UpdateClient extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        dropbox: '',
        agentId: '',
        isBuyer: true,
       id: this.props.match.params.id
    }

componentDidMount=()=>{
    this.getAgents();
    this.getClients();
}
getAgents=()=>{
    this.props.dispatch({type:'GET_AGENT'})
}

getClients=()=>{
    this.props.dispatch({type:'FETCH_CLIENT'})
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
        if(this.state.firstName && this.state.lastName && this.state.dropbox && this.state.agentId )
        this.props.dispatch({
            type: 'UPDATE_CLIENT',
            payload:  this.state
            
        })
   
    }

    handleDelete=()=>{
        console.log('hello from delete client button!!!!');
        this.props.history.push('/')
        this.props.dispatch({ type: 'DELETE_CLIENT', payload: this.state.id});
        console.log('helllooooo from delete',this.state.id);
        
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
     
                    <FormControl>
                        <InputLabel id="selectAgentLabel">Agent</InputLabel>
                        <Select
                            labelId="selectAgentLabel"
                            onChange={(event) => {this.handleChange(event, 'agentId')}}
                            value={this.state.agentId}
                        >
                            <MenuItem value={''}>--Select An Agent--</MenuItem>
                                {agentOptions}
                        </Select>
                    </FormControl>
                    <TextField
                        label="Dropbox URL"
                        placeholder="Copy and paste dropbox url"
                        value={this.state.dropbox}
                        onChange={(event) => { this.handleChange(event, 'dropbox') }}
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
                        Update Client
                    </Button>
                    <br></br>
                    <Button
                        variant="contained"
                        onClick={() => this.handleDelete()}
                        color="secondary"
                        style={styles.submitBtn}

                    >
                       Delete Client
                    </Button>
                </FormControl>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    agent: state.agent,
    state
});

export default withRouter(connect(mapStateToProps)(UpdateClient));
