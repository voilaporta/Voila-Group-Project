import React, {Component} from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'lightblue',
      '&:hover': {
        backgroundColor: 'lightblue',
      },
      marginRight: theme.spacing(2),
      margin: 'auto',
      width: '30vw',
      [theme.breakpoints.down('sm')]: {
        margin: 'auto',
        width: '80vw',
      },
    },
    searchIcon: {
      width: theme.spacing(9),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing(10),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    margin: {
        margin: theme.spacing(1),
        fontSize: '12px'
    },
  });

class DashboardAdmin extends Component {

    state = {
        value: 0
    }

    handleChange = (nextValue) => {
        this.setState({ value: nextValue });
        console.log(nextValue)
    };

    render() {

        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div>
                {/* <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                >
                    View Client
                </Fab>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                >
                    View Admins
                </Fab>
                <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={classes.margin}
                >
                    View Vendors
                </Fab> */}
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" value={0} onClick={this.handleChange}/>
          <Tab label="Item Two" value={1} onClick={this.handleChange}/>
          <Tab label="Item Three" value={2} onClick={this.handleChange}/>
        </Tabs>
                <h1 id="welcome">
                    Welcome, { this.props.user.username }!
                </h1>
                <div className={classes.search} >
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                />
            </div>
                <p>Your ID is: {this.props.user.id}</p>
            </div>
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
user: state.user,
});

export default withStyles(styles) (connect(mapStateToProps) (DashboardAdmin));