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

    isAdmin = () => {
        if(this.props.user.role_id === '3'){
            return false;
        } else {
            return true;
        }
    }
    
    render() {
        return (
            <div>
                <StepCard header='' step='1' component={this.isAdmin() ? <Step1Admin /> : <Step1Client />}/>
                <StepCard header='' step='' component={this.isAdmin() ? <Step2Admin /> : <Step2Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step3Admin /> : <Step3Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step4Admin /> : <Step4Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step5Admin /> : <Step5Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step6Admin /> : <Step6Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step7Admin /> : <Step7Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step8Admin /> : <Step8Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step9Admin /> : <Step9Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step10Admin /> : <Step10Client />} />
                <StepCard header='' step='' component={this.isAdmin() ? <Step11Admin /> : <Step11Client />} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(BuyerJourney);