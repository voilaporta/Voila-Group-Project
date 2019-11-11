import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step3Admin extends Component {

    render() {
        return (
            <div>
                <div className="showUser">
                    Current User:
                </div>

                <div className="adminCriteria">
                    User's criteria:
                </div>

                <div className="adminRequestShowing">
                    Recent showing requested:
                </div>

                <button>Mark Complete</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(Step3Admin);