import React from "react";

import {connect} from "react-redux";

import {onSwitchGender} from "../../actions/step2-data-actions";

import GenderItem from "../step_2-content-gender-item";
import itemsData from "./itemsData";

const GenderItems = ({gender, onSwitchGender}) => {
    const isGenderUnspecified = gender.value === 'unspecified';

    const items = itemsData.map(({id, label}) => {
        const isSelected = gender.selected[id];

        return (
            <GenderItem
                key = {id}
                id = {id}
                isSelected = {isSelected}
                label = {label}
            />
        )
    });

    return (
        <>
            <label
                className = {isGenderUnspecified ? 'wrong' : null}
            >{isGenderUnspecified ? 'gender must be selected.' : 'gender'}</label>

            <div 
                className = 'genderBlock block'
                onClick = {e => {
                    e.preventDefault();
                    onSwitchGender(e.target.id, e.target.innerText)
                }}
            >{items}</div>
        </>
    );
};

const mapStateToProps = ({step2Data: {gender}}) => {
    return {gender}
};

const mapDispatchToProps = {
    onSwitchGender
}

export default connect(mapStateToProps, mapDispatchToProps)(GenderItems);