import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminItem extends Component {
    editVendor = () => {
        console.log('hello from the editVendor');

    }
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.admin.firstName} </td>
                    <td>{this.props.admin.lastName}</td>
                    <td>{this.props.admin.email}</td>
                    <td>{this.props.admin.role_id}</td>
                    <td><button onClick={this.editadmin}>Edit</button></td>
                </tr>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(AdminItem);