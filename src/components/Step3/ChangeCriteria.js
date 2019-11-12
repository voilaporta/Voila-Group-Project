import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeCriteria extends Component {


    updateCriteria = () => {
        console.log('in updateCriteria');

    }

    render() {

        return( 
            <div>
                <div className="criteriaChange">
                    <input placeholder="bedroom count"/>
                    <input placeholder="bathroom count"/>
                    <input placeholder="square feet"/>
                    <input placeholder="location/zip code"/>
                    <input placeholder="Any notes for your realtor?"/>
                    <button onClick={this.updateCriteria}>Update Criteria</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
    showing: state.showing
});

export default connect(mapStateToProps)(ChangeCriteria);    