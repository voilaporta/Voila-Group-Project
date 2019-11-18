import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from './ClientItem'
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
class Client extends Component {
    state = {
        search: '',
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.substr(0, 20) })
    }
    componentDidMount() {
        // use component did mount to dispatch an action to request the client list from the API
        this.getClients();
    }
    getClients = () => {
        this.props.dispatch({ type: 'FETCH_CLIENT' })
    }

    mapClients = () => {
        let filteredContacts = this.props.clientList.filter(
            (client) => {
                return client.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1||
              client.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
              client.agent.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            }
        );
        return (
            filteredContacts.map(client =>
                <ListItem key={client.id}>
                    <ClientItem client={client} getClients={this.getClients} />
                </ListItem>)
        )
    }

    render() {
        if(this.props.clientList[0].loading){
            return(
            <div>loading....... </div>
            )
        }

        return (
            <div>
    
                <div  >

                    <TextField
                        label="Search Clients"
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


                </div>
    
                <List>
                    {this.mapClients()}
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    clientList: state.clientList
});

Client.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Client));