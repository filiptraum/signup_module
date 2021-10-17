import React from "react";

import {connect} from 'react-redux';

import {onPrevStep} from '../../actions/step-actions';

import './btn-back.scss';

const BtnBack = ({onPrevStep}) => {
    return (
        <button
            className = 'btn-back'
            onClick = {onPrevStep}
        >Back</button>
    )
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    onPrevStep
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnBack);