import React from 'react';
import ChangeCriteria from './ChangeCriteria';
import RequestShowing from './RequestShowing';
import MakeOffer from './MakeOffer';

const ComponentToUpdate = (props) => {

    let componentToShow;

    if(props.showRequest){
        componentToShow = <RequestShowing buyerName={this.props.buyerName}/>
    } else if (props.showCriteria){
        componentToShow = <ChangeCriteria buyerName={props.buyerName}/>
    } else if (props.showOffer){
        componentToShow = <MakeOffer buyerName={this.props.buyerName}/>
    }
    return componentToShow;
}

export default ComponentToUpdate;