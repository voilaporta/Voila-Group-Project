// REACT
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ProfileAdmin from '../Profile/ProfileAdmin'
import VoilaLogo from './voilalogo.jpg';

const styles = {
  root: {
    flexGrow: 1,
    textDecoration: 'none'
  },
  grow: {
    flexGrow: 1,
    marginLeft: -220,
    position: 'relative'
  },
};

class AppTopBar extends Component {
  state = {
    opens:false,
    anchorEl: null,
    addProfileAdmin:false,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleProfileAdmin = () => {
    this.setState({
      addProfileAdmin: true,
    });
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" className={classes.grow} component={Link} to="/home" disableRipple align="left" justify="left">
            <img src={VoilaLogo} width="85px" align="center"/>
          </Button>
          {this.props.user.username ? 
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                 <MenuItem onClick={this.handleProfileAdmin}>Profile 1</MenuItem>
                {this.state.addProfileAdmin ? <ProfileAdmin state={this.state} ProfileAdmin={this.ProfileAdmin} handleClose={this.handleClose} /> : null}
          
                <MenuItem component={Link} to="/profile">Profile</MenuItem>
                <MenuItem component={Link} to="/home" onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Log Out</MenuItem>
              </Menu>
            </div>
            :
            <div></div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

AppTopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
user: state.user,
});

export default withStyles(styles) (connect(mapStateToProps) (AppTopBar));