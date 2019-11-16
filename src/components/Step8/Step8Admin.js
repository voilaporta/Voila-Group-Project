import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step8Admin extends Component {

    render() {
        return (
            <div>
                <div>Appraisal:</div>
                <div>Title:</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(Step8Admin);