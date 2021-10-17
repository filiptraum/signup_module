import React from "react";

import './step_2-content-how-hear-about-us-item.scss';

const HowHearAboutUsItem = ({id, label}) => {
    return (
        <option
            id = {id}
            value = {label}
        >{label}</option>
    );
};

export default HowHearAboutUsItem;