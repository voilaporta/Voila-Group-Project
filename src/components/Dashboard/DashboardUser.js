import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadialProgress } from 'react-radial-progress-indicator';
import './Dashboard.css';
import { withRouter } from 'react-router-dom'
import homelogo from './HomePlaceholder.png'
//this here will show the client's dashboard with their buying journey status.
class DashboardUser extends Component {

    state = {
        stepsCompleted: 0
    }

    componentDidMount() {
        this.props.dispatch({ type: 'GET_JOURNEY'})
        setTimeout(() => {
            this.getStatusPercentage()
        }, 200);
    }

    getStatusPercentage = () => {
        if(this.props.userJourney.loading) {
            return false;
        }
        else {
            this.props.userJourney.forEach(step => 
                {if(step.completed) {
                    this.setState({stepsCompleted: this.state.stepsCompleted + 1})
            }})
        }
    }

    journey = () => {
        this.props.history.push(`/buyer-journey/${this.props.user.id}`)
    }
    render() {
        return ( 
            <div>
                <h3>Your buying journey:</h3>
                    <div className="card">
                        <div  >
                            <img className="cardImg" src={homelogo} alt="" />
                            <div className="status" onClick={this.journey} >
                                <h3 >Status</h3>
                                {this.props.userJourney.loading ? <p>...loading...</p> : <RadialProgress
                                    width={50}
                                    height={50}
                                    steps={11}
                                    step={this.state.stepsCompleted}
                                />}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    userJourney: state.userJourney,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(DashboardUser));

