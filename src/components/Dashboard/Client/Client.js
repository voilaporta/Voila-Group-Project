import React, { Component } from 'react';
import { connect } from 'react-redux';

class Client extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the client list from the API
        console.log('this will dispatch an action to request client list from api');
    }
    // getClients(){
    //     this.props.dispatch({type: 'FETCH_CLIENT'})
    // }
    addClient() {
        console.log('hello from the addClient button');

    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.clientList.map((client) => {
                            return (
                                <ClientItem key={client.id} client={client} getClients={this.getClients} />
                            )
                        })}
                    </tbody>
                </table>
                <div>
                    <button onClick={this.addClient}>Add Client</button>
                </div>
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

export default connect(mapStateToProps)(Client);