import React from "react";

import validation from './validation';

import './step_1-content-item.scss';

const Item = ({type, id, value, label, isValidated, additionalValue, onChangeValue}) => {
    const handler = currentValue => {
        onChangeValue(id, currentValue, validation(currentValue, additionalValue, id), validation);
    };

    return (
        <>
            <label
                htmlFor = {id}
                className = {isValidated ? null : 'wrong'}
            >{label}</label>

            <input
                type = {type}
                id = {id}
                value = {value}
                onChange = {e => handler(e.target.value)}
                onFocus = {e => handler(e.target.value)}
                onBlur = {e => handler(e.target.value)}
                autoComplete = "off"
                required
            />
        </>
    );
};

export default Item;