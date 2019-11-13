import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class UpdateClient extends Component{
    state={
        client:{
            id:'',
            firstName:'',
            lastName:'',
            dropboxUrl:'',
            agentId:'',
        }
    }
            componentDidMount=()=>{
                this.clientInfo();
            }

            clientInfo=()=>{
                {
                    this.props.state.infoClient.map((clientInfo)=>{
                        this.setState({
                            client:{
                                id:clientInfo.id,
                                firstName:clientInfo.firstName,
                                lastName:clientInfo.lastName,
                                dropboxUrl:clientInfo.dropboxUrl,
                                agentId:clientInfo.agent_id,
                            }
                        })
                        console.log('clientInfo',clientInfo);
                    })
                }
            }
            handleChange=(event,propertyName)=>{
                this.setState({
                    client:{
                        ...this.state.client,
                        [propertyName]: event.target.value,
                    }
                })
                console.log(this.state.client);
                
            }
            handleSubmit=()=>{
                this.props.dispatch({type:'UPDATE_CLIENT',payload:this.state.client})
                this.props.history.push(`/details/${this.props.match.params.id}`)
            }
            render(){
                return(
                    <Router>
                        <div>
                            <input onChange={(event)=>this.handleChange(event,'firstname')} value={this.state.client.firstName}></input>
                        </div>
                    </Router>
                )
    }
}

const mapStateToProps=state=>({
    state,
});

export default withRouter(connect(mapStateToProps)(UpdateClient));