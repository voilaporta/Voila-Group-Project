import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step7Admin extends Component {

    render() {
        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(Step7Admin);