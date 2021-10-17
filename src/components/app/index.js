import React from 'react';

import {connect} from 'react-redux';

import StepContent from '../step-content';

import './app.scss';

const App = ({step}) => {
    const indicatorWidth = window.innerWidth >= 435 ? 425 : window.innerWidth - 10;

    return (
        <div className = 'app'>
            <div className = 'content'>
                <h1 className = 'title'>{step !== 3 ? 'Signup' : 'Thank you!'}</h1>

                <div className = 'stepIndicator'>
                    <div style = {{width: indicatorWidth * step * 0.33333}}></div>
                </div>

                <StepContent
                    step = {step}
                />
            </div>
        </div>
    );
};

const mapStateToProps = ({step}) => {
    return {step}
};

export default connect(mapStateToProps)(App);