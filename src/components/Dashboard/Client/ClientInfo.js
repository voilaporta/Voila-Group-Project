import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'


class ClientInfo extends Component{
    state = {
        client:[]
    }


componentDidMount=()=>{
    this.ID();
}

ID=()=>{
    console.log(this.props.match.params.id);
    this.props.dispatch({type:'SET_INFO_CLIENT', payload:this.props.match.params.id})
    
}

handleClick =()=>{
    this.props.history.push('/')
}
update=()=>{
    this.props.history.push(`/update/${this.props.match.params.id}`);
}

render() {
    return(
        <Router>
            <div>
                <h2>Update Client Info</h2>
                <button onClick={this.handleClick}>Back</button>
                <button onClick={this.edit}>Edit</button>          
                {this.props.state.infoClient.map((client)=>{
                    return(
                        <div>
                            <p>{client.firstName}</p>
                            <p>{client.lastName}</p>
                            <p>{client.dropbox_url}</p>
                            <p>{client.agent_id}</p>
                        </div>

                    )
                })}  
                </div>
        </Router>
        )
    }
}

const mapStateToProps=state=>({
    state,
});

export default withRouter(connect(mapStateToProps)(ClientInfo));