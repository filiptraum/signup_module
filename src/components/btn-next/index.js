import React from "react";

import {connect} from 'react-redux';

import {onNextStep} from '../../actions/step-actions';

import './btn-next.scss';

const BtnNext = ({onNextStep}) => {
    return (
        <button
            className = 'btn-next'
            onClick = {onNextStep}
        >Next</button>
    )
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    onNextStep
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnNext);