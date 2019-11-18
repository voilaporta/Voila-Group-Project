import React, { Component } from 'react';
import { connect } from 'react-redux';
import VendorItem from './VendorItem';
import { List, ListItem } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    margin: {
        margin: theme.spacing(1),
    },
});
class Vendor extends Component {
    state = {
        search: '',
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20) })
    }
    componentDidMount() {
        // use component did mount to dispatch an action to request the vendor list from the API
        this.getVendor();
    }
    getVendor() {
        this.props.dispatch({ type: 'FETCH_VENDOR' })
    }

    mapVendors = () => {
        let filteredVendors = this.props.vendorList.filter(
            (vendor) => {
                return vendor.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1||
              vendor.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
              vendor.companyName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        )
        return (
            filteredVendors.map(vendor =>
                <ListItem key={vendor.id}>
                    <VendorItem vendor={vendor} getVendor={this.getVendor} />
                </ListItem>)
        )
    }
    render() {
        if(this.props.vendorList[0].loading){
            return(
            <div>loading....... </div>
            )
        }
        return (
            <div>
       
                <TextField
                    label="Search Vendors"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
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
    vendorList: state.vendorList
});

export default connect(mapStateToProps)(Vendor);