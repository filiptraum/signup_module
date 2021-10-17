import React from "react";

import {connect} from 'react-redux';

import {goToDashboard} from '../../actions/step-actions';

import './btn-dashboard.scss';

const BtnDashboard = ({goToDashboard}) => {
    return (
        <button
            className = 'btn-dashboard'
            onClick = {goToDashboard}
        >Go to Dashboard</button>
    )
};

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = {
    goToDashboard
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnDashboard);