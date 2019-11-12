import React, {Component} from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import ClientList from '../ClientList/ClientList';
import AdminList from '../AdminList/AdminList';
import VendorList from '../VendorList/VendorList';

import Vendor from './Vendor/Vendor'
;function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };
const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      height: '5vh',
      paddingTop: '2vh',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'lightblue',
      '&:hover': {
        backgroundColor: 'lightblue',
      },
      marginRight: theme.spacing(1),
      margin: 'auto',
      width: '20vw',
      [theme.breakpoints.down('sm')]: {
        margin: 'right',
        width: '50vw',
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
        width: 'auto',
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

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
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
            <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab label="Clients" />
                    <Tab label="Admins" />
                    <Tab label="Vendors" />
                </Tabs>
                <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                <TabContainer dir={theme.direction}> <ClientList /> </TabContainer>
                <TabContainer dir={theme.direction}> <AdminList /> </TabContainer>
                <TabContainer dir={theme.direction}> <VendorList /> </TabContainer>
                </SwipeableViews>
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

DashboardAdmin.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true }) (connect(mapStateToProps) (DashboardAdmin));