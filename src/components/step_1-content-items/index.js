import React from "react";

import {connect} from 'react-redux';

import {onChangeStep1DataValue} from '../../actions/step1-data-actions';

import Item from '../step_1-content-item';
import itemsData from './itemsData';

const Step1ContentItems = ({step1Data, onChangeStep1DataValue}) => {
    const items = itemsData.map(({id, type, label}) => {
        const {value, isValidated} = step1Data.find(item => item.id === id);
        
        const password = step1Data.find(item => item.id === 'password').value;

        return (
            <Item
                key = {id}
                type = {type}
                id = {id}
                value = {value}
                isValidated = {isValidated}
                label = {label}
                additionalValue = {password}
                onChangeValue = {onChangeStep1DataValue}
            />
        );
    });

    return items;
};

const mapStateToProps = ({step1Data}) => {
    return {step1Data}
};

const mapDispatchToProps = {
    onChangeStep1DataValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Step1ContentItems);