import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RadialProgress } from 'react-radial-progress-indicator';
import './Dashboard.css';
import { withRouter } from 'react-router-dom'
import homelogo from './HomePlaceholder.png'
//this here will show the client's dashboard with their buying journey status.
class DashboardUser extends Component {
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
                        <RadialProgress
                            width={50}
                            height={50}
                            steps={10}
                            step={1}
                        />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(DashboardUser));

