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
  
class VendorItem extends Component {
    updateVendor = () => {
        console.log('hello from the updateVendor');

    }
    render() {
        const {classes} = this.props;
        return (

            <tr>
                <td>{this.props.vendor.firstName} {this.props.vendor.lastName}</td>
                <td>{this.props.vendor.companyName}</td>
                <td>{this.props.vendor.vendor_type_name}</td>
                <td>{this.props.vendor.phoneNumber}</td>
                <td><Fab color="secondary"  size="small" aria-label="edit" className={classes.fab}>
                    <EditIcon onClick={this.updateVendor}/>
                </Fab></td>
                {/* <td><button onClick={this.updateVendor}>Update</button></td> */}
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

export default withStyles(styles) (connect(mapStateToProps)(VendorItem));