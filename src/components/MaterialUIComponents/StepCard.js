import React, { Component } from 'react';
import { Card, CardHeader, CardContent, Avatar, IconButton, Collapse, Typography, CardActions, Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DescriptionIcon from '@material-ui/icons/Description';
import CheckIcon from '@material-ui/icons/Check';
import MoreInfoPopover from './MoreInfoPopover';
import { recomposeColor } from '@material-ui/core/styles';

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
                        <CardContent>
                            {this.props.component}
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
        );
    }
}

export default StepCard;