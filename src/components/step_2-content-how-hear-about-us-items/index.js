import React from "react";

import {connect} from "react-redux";

import {onChangeHowHearAboutUsValue} from "../../actions/step2-data-actions";

import HowHearAboutUsItem from "../step_2-content-how-hear-about-us-item";
import itemsData from "./itemsData";

const HowHearAboutUsItems = ({howHearAboutUs, onChangeHowHearAboutUsValue}) => {
    const items = itemsData.map(({id, label}) => {
        return (
            <HowHearAboutUsItem
                key = {id}
                id = {id}
                label = {label}
            />
        )
    });

    return (
        <>
            <label>where did your hear about us?</label>

            <div className = 'howHearAboutUsBlock block'>
                <select
                    id = "howHearAboutUs"
                    defaultValue = {howHearAboutUs.value}
                    onChange = {e => {
                        e.preventDefault();
                        onChangeHowHearAboutUsValue(e.target.value);
                    }}
                >
                    <option value = 'null'></option>

                    {items}
                </select>
            </div>
        </>
    );
};

const mapStateToProps = ({step2Data: {howHearAboutUs}}) => {
    return {howHearAboutUs}
};

const mapDispatchToProps = {
    onChangeHowHearAboutUsValue
}

export default connect(mapStateToProps, mapDispatchToProps)(HowHearAboutUsItems);