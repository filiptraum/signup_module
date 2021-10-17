import React from "react";

import './step_2-content-gender-item.scss';

const GenderItem = ({id, label, isSelected}) => {
    return (
        <button
            id = {id}
            className = {isSelected ? 'selected' : null}
        >{label}</button>
    );
};

export default GenderItem;