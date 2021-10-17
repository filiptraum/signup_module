import React from "react";

import DateOfBirthItems from "../step_2-content-date-of-birth-items";
import GenderItems from "../step_2-content-gender-items";
import HowHearAboutUsItems from '../step_2-content-how-hear-about-us-items';

import BtnNext from '../btn-next';
import BtnBack from "../btn-back";

const Step2Content = () => {
    return (
        <form onSubmit = {e => e.preventDefault()}>
            <div className = 'step step2'>
                <DateOfBirthItems/>

                <GenderItems/>

                <HowHearAboutUsItems/>
            </div>
            
            <div className = 'btns'>
                <BtnBack/>
                
                <BtnNext/>
            </div>
        </form>
    );
};

export default Step2Content;