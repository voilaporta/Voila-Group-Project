import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import  {withRouter} from 'react-router-dom';
const styles =theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  });
  

class AdminItem extends Component {
    updateAdmin = (id) => {
        this.props.history.push(`/updateadmin/${id}`)

    }
    
    render() {
        const {classes} = this.props;
        return (
            
                <tr>
                    <td>{this.props.admin.firstName} </td>
                    <td>{this.props.admin.lastName}</td>
                    <td>{this.props.admin.email}</td>
                    <td>{this.props.admin.role_id}</td>
                    <td><Fab color="secondary"  size="small" aria-label="edit" className={classes.fab}>
                    <EditIcon onClick={()=>{this.updateAdmin(this.props.admin.id)}} />
                </Fab></td>
                    {/* <td><button onClick={this.admin}>Update</button></td> */}
                </tr>
           
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

export default withStyles(styles) (withRouter(connect(mapStateToProps)(AdminItem)));