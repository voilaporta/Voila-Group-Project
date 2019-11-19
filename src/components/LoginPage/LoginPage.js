import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './voilaLogin.png'



import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles =theme => ({

    body: {
      backgroundColor: theme.palette.common.white,
    },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});



class LoginPage extends Component{
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
render(){
        const { classes } = this.props;

  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
 <div>
        <img src={logo} alt = "" width= "300px" height= "200px"/>
 </div>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Username"
          label="Username"
          name="Username"
          autoComplete="Username"
          value={this.state.username}
        onChange={this.handleInputChangeFor('username')}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={this.state.password}
       onChange={this.handleInputChangeFor('password')}
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={this.login}
        >
          Sign In
        </Button>
      
      </form>
    </div>
  </Container>
  )
}
}
// import logo from './voilaLogin.jpg'
// import './LoginPage.css'
// class LoginPage extends Component {
 

//   render() {
//     return (
//       <div>
//         {this.props.errors.loginMessage && (
//           <h2
//             className="alert"
//             role="alert"
//           >
//             {this.props.errors.loginMessage}
//           </h2>
//         )}
//         <form className="loginform" onSubmit={this.login}>
//           <div className="loginlogo">
//           <img src={logo} alt = ""/>
//           </div>
//           <div>
//             <label htmlFor="username">
//               {/* Username: */}
//               <input
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 value={this.state.username}
//                 onChange={this.handleInputChangeFor('username')}
//               />
//             </label>
//           </div>
//          <br></br>
//           <div>
//             <label htmlFor="password">
//               {/* Password: */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 value={this.state.password}
//                 onChange={this.handleInputChangeFor('password')}
//               />
//             </label>
//           </div>
//           <br></br>
//           <div>
//             <input
//               className="log-in"
//               type="submit"
//               name="submit"
//               value="Log In"
//             />
//           </div>
//         </form>
//         <center>
//         </center>
//       </div>
//     );
//   }
// }

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withStyles(styles)(connect(mapStateToProps)(LoginPage));
