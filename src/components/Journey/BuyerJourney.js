import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../MaterialUIComponents/StepCard';
import Step1Admin from '../Step1/Step1Admin';
import Step1Client from '../Step1/Step1Client';
import Step2Admin from '../Step2/Step2Admin';
import Step2Client from '../Step2/Step2Client';
import Step3Admin from '../Step3/Step3Admin';
import Step3Client from '../Step3/Step3Client';
import Step4Admin from '../Step4/Step4Admin';
import Step4Client from '../Step4/Step4Client';
import Step5Admin from '../Step5/Step5Admin';
import Step5Client from '../Step5/Step5Client';
import Step6Admin from '../Step6/Step6Admin';
import Step6Client from '../Step6/Step6Client';
import Step7Admin from '../Step7/Step7Admin';
import Step7Client from '../Step7/Step7Client';
import Step8Admin from '../Step8/Step8Admin';
import Step8Client from '../Step8/Step8Client';
import Step9Admin from '../Step9/Step9Admin';
import Step9Client from '../Step9/Step9Client';
import Step10Admin from '../Step10/Step10Admin';
import Step10Client from '../Step10/Step10Client';
import Step11Admin from '../Step11/Step11Admin';
import Step11Client from '../Step11/Step11Client';

class BuyerJourney extends Component {
    
    state = {
        header: [],
        step: []
    }

    componentDidMount(){
        this.props.dispatch({type: 'GET_JOURNEY'})
    }

    isAdmin = () => {
        if(this.props.user.role_id === '3'){
            return false;
        } else {
            return true;
        }
    }

    getHeaders = () => {
        let header = this.props.userJourney.map(step => [...step.name])
        return header;
    }

    
    render(){
        return (
                <div>
                    
                    {this.props.userJourney.loading === true ? <p>...loading...</p> 
                    :
                    <>
                        {this.props.userJourney.map(step => <div key={step.id}><StepCard step={step} /></div>)}
                    </>
                    }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userJourney: state.userJourney,
    user: state.user,
});

export default connect(mapStateToProps)(BuyerJourney);