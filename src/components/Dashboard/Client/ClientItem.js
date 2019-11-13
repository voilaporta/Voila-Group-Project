import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import  {withRouter} from 'react-router-dom';

// const styles =theme => ({
//     fab: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
//   });
  

class ClientItem extends Component {
    updateClient = () => {
        this.props.history.push('/updateclient')

    }
    render() {
        // const {classes} = this.props;
        return (
            
                <tr>
                    <td>{this.props.client.firstName}</td>
                    <td>{this.props.client.lastName}</td>
                    {/* <td><button onClick={this.updateClient}>Update</button></td> */}
                    {/* <td><Fab color="secondary"  size="small" aria-label="edit" className={classes.fab}>
                    <EditIcon onClick={this.updateClient}/>
                </Fab></td> */}
                <td><button onClick={this.updateClient}>Update</button></td>
            </tr>
                
            
        )
    }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default  withRouter(connect(mapStateToProps)(ClientItem)) ;
// withStyles(styles);