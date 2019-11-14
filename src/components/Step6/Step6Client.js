import React, { Component } from 'react';
import { connect } from 'react-redux';

class Step6Client extends Component {
    state = {
        inspectionId: '',
    }

    handleChange = (propertyName, event)=>{
        this.setState({
            [propertyName]: event.target.value
          })
    }

    displaySingleInspector = ()=>{
        //display the vendor's contact information
        const inspectorToDisplay = this.props.vendorList.find((inspector)=> inspector.id === Number(this.state.inspectionId));
        return <div>
                    <p>{inspectorToDisplay.firstName} {inspectorToDisplay.lastName}</p>
                    <p>{inspectorToDisplay.companyName}</p>
                    <p>{inspectorToDisplay.phoneNumber}</p>
                    <p>{inspectorToDisplay.email}</p>
                    <p>{inspectorToDisplay.website}</p>
                </div>
    }

    componentDidMount = ()=>{
        this.props.dispatch({type: 'GET_INSPECTORS'});
    }
    render() {
        //if redux store vendorList has not yet loaded the date
        //the page will display ...loading... rather than empty data
        if(this.props.vendorList[0].loading){
            return <div>...loading...</div>
        }
        //loop through inspection vendors from redux store (vendorList)
        //to display each individual vendor name in select
        const inspectors = this.props.vendorList.map((inspector)=>{
            return <option value={inspector.id}
                    key={inspector.id}>{inspector.companyName}</option>
        })
        return (
            <div>
                <h1>Use one of our inspection partners or schedule your own</h1>
                <div className="inspectionPartners">
                    <select value={this.state.inspectionId} onChange={(event)=>{this.handleChange('inspectionId', event)}}>
                    <option value="">--View an Inspector--</option>
                    {inspectors}
                    </select>
                    {/* if an inspector has been selected from the list, show the contact info otherwise sho nothing */}
                    {this.state.inspectionId ? <div>{this.displaySingleInspector()}</div> : <div></div>}
                </div>

                <div className="inspectionDetails">
                    <div>Add Your Inspection Details <button>+</button></div>
                    <div>(x) Inspection Scheduled:
                        <div><p>inspector:</p><p>Date:</p></div>
                    </div>
                    <div>(x) Inspection Negotiated:
                        <p>To be marked complete by Voila</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    vendorList: state.vendorList,
});

export default connect(mapStateToProps)(Step6Client);