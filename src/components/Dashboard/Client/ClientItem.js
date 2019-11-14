import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import  {withRouter} from 'react-router-dom';

class ClientItem extends Component {
    updateClient = (id) => {
        this.props.history.push(`/updateclient/${id}`)

    }
    render() {

        return (
                <tr>
                    <td>{this.props.client.firstName}</td>
                    <td>{this.props.client.lastName}</td>
                    <td>{this.props.client.dropboxUrl}</td>
                    <td>{this.props.client.agent_id}</td>
                </tr>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default  withStyles(styles) (withRouter(connect(mapStateToProps)(ClientItem))) ;
// withStyles(styles);