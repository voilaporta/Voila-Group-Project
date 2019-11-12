import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardContent, Avatar, IconButton, Collapse, Typography, CardActions, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import MoreInfoPopover from './MoreInfoPopover';
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

const styles = {
    card: {
        margin: 10
    },
    expanded: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandedOpen: {
        transform: 'rotate(180deg)',
        marginLeft: 'auto'
    },
    cardHeader: {
        textAlign: 'center',
        fontSize: '18pt',
        fontWeight: 10
    },
    avatarComplete: {
        color: '#81c784',
        backgroundColor: 'white'
    },
    complete: {
        backgroundColor: '#81c784'
    },
    vault: {
        marginLeft: 'auto'
    }
};

class StepCard extends Component {
    state = {
        expanded: false,
        complete: this.props.step.completed,
    };

    componentToRender = (stepNum, roleId) => {
        switch (stepNum) {
            case 1:
                if(roleId === 3) {
                    return <Step1Client />
                } else {
                    return <Step1Admin />
                }
            case 2:
                if (roleId === 3) {
                    return <Step2Client />
                } else {
                    return <Step2Admin />
                }
            case 3:
                if (roleId === 3) {
                    return <Step3Client />
                } else {
                    return <Step3Admin />
                }
            case 4:
                if (roleId === 3) {
                    return <Step4Client />
                } else {
                    return <Step4Admin />
                }
            case 5:
                if (roleId === 3) {
                    return <Step5Client />
                } else {
                    return <Step5Admin />
                }
            case 6:
                if (roleId === 3) {
                    return <Step6Client />
                } else {
                    return <Step6Admin />
                }
            case 7:
                if (roleId === 3) {
                    return <Step7Client />
                } else {
                    return <Step7Admin />
                }
            case 8:
                if (roleId === 3) {
                    return <Step8Client />
                } else {
                    return <Step8Admin />
                }
            case 9:
                if (roleId === 3) {
                    return <Step9Client />
                } else {
                    return <Step9Admin />
                }
            case 10:
                if (roleId === 3) {
                    return <Step10Client />
                } else {
                    return <Step10Admin />
                }
            case 11:
                if (roleId === 3) {
                    return <Step11Client />
                } else {
                    return <Step11Admin />
                }
            default:
                console.log('Invalid step. If you have created more steps, please add them here');
                
                break;
        }
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleComplete = () => {
        this.setState(state => ({ complete: !state.complete,
        expanded: !state.expanded }))
    }

    render() {

        return (
            <div>
                <Card style={styles.card}>
                    <CardHeader
                        style={this.state.complete ? styles.complete : null}
                        avatar={this.state.complete ? <Avatar style={styles.avatarComplete}><CheckIcon /></Avatar> : <Avatar>{this.props.step.order}</Avatar>}
                        title={<Typography style={styles.cardHeader}>{this.props.step.name}</Typography>}
                        action={<MoreInfoPopover content={this.props.step.description}/>}
                    />
                    <CardActions disableSpacing sizes="small">
                        <IconButton style={this.state.expanded ? styles.expandedOpen : styles.expanded}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent >
                            {this.componentToRender(this.props.step.order, this.props.user.role_id)}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(StepCard);