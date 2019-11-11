import React, { Component } from 'react';
import { connect } from 'react-redux';
import StepCard from '../MaterialUIComponents/StepCard';
import { Step1Admin, Step1Client } from '../Step1/';
import { Step2Admin, Step2Client } from '../Step2/';
import { Step3Admin, Step3Client } from '../Step3/';
import { Step4Admin, Step4Client } from '../Step4/';
import { Step5Admin, Step5Client } from '../Step5/';
import { Step6Admin, Step6Client } from '../Step6/';
import { Step7Admin, Step7Client } from '../Step7/';
import { Step8Admin, Step8Client } from '../Step8/';
import { Step9Admin, Step9Client } from '../Step9/';
import { Step10Admin, Step10Client } from '../Step10/';
import { Step11Admin, Step11Client } from '../Step11/';

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