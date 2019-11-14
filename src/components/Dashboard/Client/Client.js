import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from './ClientItem'
  
class Client extends Component {

    componentDidMount() {
        // use component did mount to dispatch an action to request the client list from the API
    this.getClients();
    }
    getClients(){
        this.props.dispatch({type: 'FETCH_CLIENT'})
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DropBox URL</th>
                            <th>Agent</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.state.clientList.map((client) => {
                            return (
                                <ClientItem key={client.id} client={client} getClients={this.getClients} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state
});

export default (connect(mapStateToProps)(Client));