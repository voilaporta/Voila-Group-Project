import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step9Client extends Component {

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

export default connect(mapStateToProps)(Step9Client);