import React from "react";

import BtnDashboard from "../btn-dashboard";

import './step_3-content.scss';

import icon from './check.png';

const Step3Content = () => {
    return (
        <div className = 'step3'>
            <img src = {icon} alt = 'icon'/>

            <BtnDashboard/>
        </div>
    )
};

export default Step3Content;