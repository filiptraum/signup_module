import React from "react";

import validation from './validation';

import './step_2-content-date-of-birth-item.scss';

const DateOfBirthItem = ({id, itemsData, values, isValidated, placeholder, onChangeValue}) => {
    const handler = currentValue => {
        onChangeValue(validation(itemsData, {...values, [id]: currentValue}));
    };

    return (
        <input
            type = 'number'
            id = {id}
            className = {isValidated ? null : 'wrong'}
            value = {values[id]}
            placeholder = {placeholder}
            onChange = {e => handler(e.target.value)}
            onFocus = {e => handler(e.target.value)}
            autoComplete = "off"
            required
        />
    );
};

export default DateOfBirthItem;