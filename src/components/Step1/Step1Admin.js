import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

class Step1Admin extends Component {

    render() {
        return (
            <div>
                {JSON.stringify(this.props.user)}
                <Typography paragraph>{this.props.user.firstName} has started the home-buying process with you.</Typography>
                <Typography paragraph>
                    Voila Vault link:
                </Typography>
                <Button variant="outlined" startIcon={<DescriptionIcon />}>
                    Voila Vault
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Step1Admin);