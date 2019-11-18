import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from './ClientItem'
import { List, ListItem } from '@material-ui/core';
  
class Client extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to request the client list from the API
    this.getClients();
    }
    getClients(){
        this.props.dispatch({type: 'FETCH_CLIENT'})
    }

    mapClients = () => {
        return (
            this.props.clientList.map(client => 
                <ListItem key={client.id}>
                    <ClientItem client={client} getClients={this.getClients}/>
                </ListItem>)
        )
    }

    render() {

        return (
            <div>
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

export default (connect(mapStateToProps)(Client));