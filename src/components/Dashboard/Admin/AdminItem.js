import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';

const styles =theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  });
  

class AdminItem extends Component {
    Vendor = () => {
        console.log('hello from the Vendor');

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
                    <EditIcon onClick={this.admin} />
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
});

export default withStyles(styles) (connect(mapStateToProps)(AdminItem));