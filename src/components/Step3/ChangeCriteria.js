import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChangeCriteria extends Component {

    state = {
        user_step_id: '',
        bedroom_count: '',
        bathroom_count: '',
        square_feet: '',
        location: '',
        notes: ''
    }


    updateCriteria = () => {
        console.log('in updateCriteria');

    }

    render() {

        return( 
            <div className="criteriaChange">
                    <input placeholder="bedroom count"/>
                    <input placeholder="bathroom count"/>
                    <input placeholder="square feet"/>
                    <input placeholder="location/zip code"/>
                    <input placeholder="Any notes for your realtor?"/>
                    <button onClick={this.updateCriteria}>Update Criteria</button>
                    <button onClick={this.cancel}>Cancel</button>
            </div>
                
        )
    }
}

const mapStateToProps = state => ({
    criteria: state.criteria,
});

export default connect(mapStateToProps)(ChangeCriteria);    