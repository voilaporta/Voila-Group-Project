import React from 'react';
import ChangeCriteria from './ChangeCriteria';
import RequestShowing from './RequestShowing';
import MakeOffer from './MakeOffer';
 

const ComponentToUpdate = (props) => {

    let componentToShow;

    if(props.showRequest){
        componentToShow = <RequestShowing buyerFirstName={props.buyerFirstName} buyerLastName={props.buyerLastName}/>
    } else if (props.showCriteria){
        componentToShow = <ChangeCriteria buyerFirstName={props.buyerFirstName} buyerLastName={props.buyerLastName}/>
    } else if (props.showOffer){
        componentToShow = <MakeOffer buyerFirstName={props.buyerFirstName} buyerLastName={props.buyerLastName}/>
    }
    return componentToShow;
}

export default ComponentToUpdate;