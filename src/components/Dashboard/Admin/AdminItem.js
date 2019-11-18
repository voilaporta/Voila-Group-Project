import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import UpdateAdmin from './UpdateAdmin';
import { ListItemIcon, IconButton, ListItemText, ListItemSecondaryAction, Button, Link } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';


const styles = theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
});


class AdminItem extends Component {
    state = {
        open: false,
        showLevel:false,
    }
    updateAdmin = () => {
        this.setState({
            open: true
        })

    }
    handleClose = () => {
        this.setState({
            open: false,
        })
    }

    render() {
        const { classes } = this.props;
        return (
            // <tr>
            //     <td>{this.props.admin.firstName} </td>
            //     <td>{this.props.admin.lastName}</td>
            //     <td>{this.props.admin.email}</td>
            //     {/* <td>{this.props.admin.role_id}</td> */}
            //     <td>
            //         <Fab color="secondary" size="small" aria-label="edit" className={classes.fab} onClick={this.updateAdmin}>
            //             <EditIcon />
            //         </Fab>
            //     </td>
            //     {this.state.open ? <UpdateAdmin state={this.state} updateAdmin={this.updateAdmin} handleClose={this.handleClose} adminId={this.props.adminId} /> : <div></div>}
            // </tr>

            <>
                <ListItemText>
                    <PersonIcon /> {this.props.admin.firstName} {this.props.admin.lastName}
                </ListItemText>

                <ListItemText>
                < EmailIcon /> {this.props.admin.email}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton edge="end" color="secondary" aria-label="edit" onClick={this.updateAdmin}>
                        <EditIcon onClick={() => { this.updateAdmin(this.props.admin.id) }} />
                    </IconButton>
                </ListItemSecondaryAction>
                {this.state.open ? <UpdateAdmin state={this.state} updateAdmin={this.updateAdmin} handleClose={this.handleClose} adminId={this.props.adminId} admin={this.props.admin}  /> : <div></div>}
            </>

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

export default withStyles(styles)(withRouter(connect(mapStateToProps)(AdminItem)));