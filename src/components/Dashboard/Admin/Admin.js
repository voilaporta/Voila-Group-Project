import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminItem from './AdminItem'
import { List, ListItem } from '@material-ui/core';

class Admin extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        this.getAdmin();
    }

    //dispatching a call to the adminSaga 
    getAdmin() {
        this.props.dispatch({ type: 'FETCH_ADMIN' })
    }


    mapAdmins = () => {
        return (
            this.props.adminList.map(admin =>
                <ListItem key={admin.id}>
                    <AdminItem admin={admin} getAdmin={this.getAdmin} />
                </ListItem>)
        )
    }
    render() {
        return (
            // <div>
            //     <table>
            //         <thead>
            //             <tr>
            //                 <th>First Name</th>
            //                 <th>Last Name</th>
            //                 <th>Email </th>
            //                 {/* <th>Role</th> */}
            //                 <th>Update</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            //             {/*mapping through the adminList reducer to grab the admin's information */}
            //             {this.props.state.adminList.map((admin) => {
            //                 return (
            //                     <AdminItem key={admin.id} admin={admin} getAdmin={this.getAdmin} adminId={admin.id} />
            //                 )
            //             })}
            //         </tbody>
            //     </table>
            // </div>
            <div>
                <List>
                    {this.mapAdmins()}
                </List>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
    state,
    adminList: state.adminList
});

export default connect(mapStateToProps)(Admin);

