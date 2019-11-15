import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import {withRouter } from 'react-router-dom';
import UpdateVendor from './UpdateVendor';
const styles =theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  });
  
class VendorItem extends Component {
    state={
        open:false,
}
    updateVendor = (id) => {
        // this.props.history.push(`/updatevendor/${id}`)
        this.setState({
            open: true
        })
    }
    handleClose=()=>{
        this.setState({
            open: false,
        })
        console.log('hello from handleclose');
        
    }
    render() {
        const {classes} = this.props;
        return (

            <tr>
                <td>{this.props.vendor.firstName} {this.props.vendor.lastName}</td>
                <td>{this.props.vendor.companyName}</td>
                <td>{this.props.vendor.vendor_type_name}</td>
                <td>{this.props.vendor.phoneNumber}</td>
                {/* <td>{this.props.vendor.email}</td>
                <td>{this.props.vendor.website}</td> */}
                <td><Fab color="secondary"  size="small" aria-label="edit" className={classes.fab}>
                    <EditIcon onClick={()=>{this.updateVendor(this.props.vendor.id)}}/>
                </Fab></td>
                {this.state.open ? <UpdateVendor state={this.state} updateVendor={this.updateVendor} handleClose={this.handleClose} vendorId={this.props.vendorId}/> : <div></div>}

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

export default withStyles(styles) (withRouter(connect(mapStateToProps)(VendorItem)));