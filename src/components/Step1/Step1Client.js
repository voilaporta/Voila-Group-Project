import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, Button } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';


class Step1Client extends Component {

    render() {
        return (
            <div>
                <Typography paragraph>Welcome, {this.props.user.firstName}</Typography>
                <Typography paragraph>
                    Here, you can follow your home-buying journey! You can also click the vault icon to see all of your documents in the voila vault.
                            </Typography>
                <Button variant="outlined" startIcon={<DescriptionIcon />}>
                    Voila Vault
                </Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
    user: state.user
});

export default connect(mapStateToProps)(Step1Client);