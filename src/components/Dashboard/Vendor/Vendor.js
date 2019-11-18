import React, { Component } from 'react';
import { connect } from 'react-redux';
import VendorItem from './VendorItem';
import { List, ListItem } from '@material-ui/core';
class Vendor extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        this.getVendor();
    }
    getVendor() {
        this.props.dispatch({ type: 'FETCH_VENDOR' })
    }

    mapVendors = () => {
        return (
            this.props.vendorList.map(vendor =>
                <ListItem key={vendor.id}>
                    <VendorItem vendor={vendor} getVendor={this.getVendor} />
                </ListItem>)
        )
    }
    render() {
        return (
            <div>
                {/* <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Company Name</th>
                            <th>Vendor Type</th>
                            <th>Contact Info</th>
          
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.vendorList.map((vendor) => {
                            return (
                                <VendorItem key={vendor.id} vendor={vendor} getVendor={this.getVendor}  vendorId={vendor.id}/>
                            )
                        })}
                    </tbody>
                </table> */}
                <List>
                    {this.mapVendors()}
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
    vendorList:state.vendorList
});

export default connect(mapStateToProps)(Vendor);