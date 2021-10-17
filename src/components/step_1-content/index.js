import React from "react";

import Step1ContentItems from '../step_1-content-items';
import BtnNext from '../btn-next';

const Step1Content = () => {
    return (
        <form onSubmit = {e => e.preventDefault()}>
            <div className = 'step step1'>
                <Step1ContentItems/>
            </div>
            
            <BtnNext/>
        </form>
    )
};

export default Step1Content;