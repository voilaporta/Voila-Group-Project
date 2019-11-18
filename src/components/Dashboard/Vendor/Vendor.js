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
                <List>
                    {this.mapVendors()}
                </List>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state,
    vendorList:state.vendorList
});

export default connect(mapStateToProps)(Vendor);