import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import UpdateClient from './UpdateClient'
import { ListItemIcon, IconButton, ListItemText, ListItemSecondaryAction, Button, Link } from '@material-ui/core';
const styles = theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
});


class ClientItem extends Component {
    state={
            open:false,
    }
    updateClient = (id) => {
        // this.props.history.push(`/updateclient/${id}`)
        console.log('checking client id',this.props.clientId);
        
        this.setState({
            open: true
        })
        console.log('hello from updateclient', this.state);
        
    }

    handleClose=()=>{
        this.setState({
            open: false,
        })
        console.log('hello from handleclose');
        
    }
    render() {
        const { classes } = this.props;

        return (
            // <tr>
            //     <td>{this.props.client.firstName}</td>
            //     <td>{this.props.client.lastName}</td>
            //     <td>{this.props.client.dropboxUrl}</td>
            //     <td>{this.props.client.agent_id}</td>
            //     <td><IconButton color="secondary" aria-label="edit" className={classes.fab} onClick={this.updateClient}>
            //         <EditIcon onClick={() => { this.updateClient(this.props.clientId) }} />
            //     </IconButton></td>
            //     {this.state.open ? <UpdateClient state={this.state} updateClient={this.updateClient} handleClose={this.handleClose} clientId={this.props.clientId} client={this.props.client}/> : <div></div>}
            // </tr>
            <>
                <ListItemIcon>
                    <IconButton href={`#/buyer-journey/${this.props.client.id}`}>
                        <HomeIcon />
                    </IconButton>
                </ListItemIcon>
                <ListItemText>                   
                    <Link href={`#/buyer-journey/${this.props.client.id}`}>
                        {this.props.client.firstName} {this.props.client.lastName}
                    </Link>
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge="end" color="secondary" aria-label="edit" onClick={this.updateClient}>
                        <EditIcon onClick={() => { this.updateClient(this.props.client.id) }} />
                    </IconButton>
                </ListItemSecondaryAction>
                {this.state.open ? <UpdateClient state={this.state} updateClient={this.updateClient} handleClose={this.handleClose} clientId={this.props.client.id} client={this.props.client} /> : <div></div>}
            </>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ClientItem)));
// withStyles(styles);