import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Step1Content from '../step_1-content';
import Step2Content from '../step_2-content';
import Step3Content from '../step_3-content';

import './step-content.scss';

const StepContent = ({step}) => {
    return (
        <>
            <Redirect to = {`/step-${step}`}/>

            <Switch>
                <Route path = '/step-3' component = {Step3Content}/>
                <Route path = '/step-2' component = {Step2Content}/>
                <Route component = {Step1Content}/>
            </Switch>
        </>
        
    )
};

export default StepContent;