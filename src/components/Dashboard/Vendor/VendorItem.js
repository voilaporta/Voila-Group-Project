import React, { Component } from 'react';
import { connect } from 'react-redux';

class VendorItem extends Component {
    updateVendor = () => {
        console.log('hello from the editVendor');

    }
    render() {
        return (
           
                <tr>
                    <td>{this.props.vendor.firstName} {this.props.vendor.lastName}</td>
                    <td>{this.props.vendor.companyName}</td>
                    <td>{this.props.vendor.vendor_type_name}</td>
                    <td>{this.props.vendor.phoneNumber}</td>
                    <td><button onClick={this.updateVendor}>Update</button></td>
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

export default connect(mapStateToProps)(VendorItem);