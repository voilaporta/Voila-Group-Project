import React from 'react';
import { connect } from 'react-redux';


// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const ProfileInfo= (props) => (
  <div>
    <p >
 {props.user.firstName} {props.user.lastName}
    </p>
    <p >
 Username: {props.user.username}
    </p>
    <p >
Email: {props.user.email}
    </p>
    <p >
Admin Level : {props.user.role_id}
    </p>


  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProfileInfo);
