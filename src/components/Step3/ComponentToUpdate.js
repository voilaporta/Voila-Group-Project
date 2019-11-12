import React from 'react';
import ChangeCriteria from './ChangeCriteria';
import RequestShowing from './RequestShowing';
import MakeOffer from './MakeOffer';

const ComponentToUpdate = (props) => {

    let componentToShow;

    if(props.showRequest){
        componentToShow = <RequestShowing/>
    }else if (props.showCriteria){
        componentToShow = <ChangeCriteria/>
    }
    else if (props.showOffer){
        componentToShow = <MakeOffer/>
    }
    return componentToShow;
}

export default ComponentToUpdate;