import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClientItem from './ClientItem'
import ClientDialog from './ClientDialog';
import AddButton from '../AddButton/AddButton';
  
class Client extends Component {

    state = {
        open: false,
    };

    // opens the Add Button
    handleAdd = () => {
    this.setState({ open: true });
    };

    // Closes the Add Button
    handleClose = () => {
        this.setState({ open: false });
    };

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
                <AddButton handleAdd={this.handleAdd} handleClose={this.handleClose}/>
                <ClientDialog state={this.state} handleAdd={this.handleAdd} handleClose={this.handleClose}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    state
});

export default (connect(mapStateToProps)(Client));