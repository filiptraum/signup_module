import React from "react";

import {connect} from 'react-redux';

import {onChangeDateOfBirthValue} from '../../actions/step2-data-actions';

import DateOfBirthItem from "../step_2-content-date-of-birth-item";
import itemsData from "./itemsData";

const DateOfBirthItems = ({dateOfBirth, onChangeDateOfBirthValue}) => {
    const {value: dayValue, isValidated: dayIsValidated} = dateOfBirth.find(item => item.id === 'day');
    const {value: monthValue, isValidated: monthIsValidated} = dateOfBirth.find(item => item.id === 'month');
    const {value: yearValue, isValidated: yearIsValidated} = dateOfBirth.find(item => item.id === 'year');

    const values = {day: dayValue, month: monthValue, year: yearValue};
    const isValidated = {day: dayIsValidated, month: monthIsValidated, year: yearIsValidated};

    const items = itemsData.map(({id, placeholder}) => {
        return (
            <DateOfBirthItem
                key = {id}
                id = {id}
                placeholder = {placeholder}
                values = {values}
                itemsData = {itemsData}
                isValidated = {isValidated[id]}
                onChangeValue = {onChangeDateOfBirthValue}
            />
        )
    });

    return (
        <>
            <label
                htmlFor = 'date'
                className = {dayIsValidated && monthIsValidated && yearIsValidated ? null : 'wrong'}    
            >date of birth</label>
            
            <div className = 'dateOfBirthBlock block'>{items}</div>
        </>
    );
};

const mapStateToProps = ({step2Data: {dateOfBirth}}) => {
    return {dateOfBirth}
};

const mapDispatchToProps = {
    onChangeDateOfBirthValue
};

export default connect(mapStateToProps, mapDispatchToProps)(DateOfBirthItems);