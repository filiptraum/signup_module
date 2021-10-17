const onNextStep = () => {
    return {
        type: 'ON_NEXT_STEP'
    }
};

const onPrevStep = () => {
    return {
        type: 'ON_PREVIOUS_STEP'
    }
};

const goToDashboard = () => {
    return {
        type: 'GO_TO_DASHBOARD'
    }
};

export {
    onNextStep,
    onPrevStep,
    goToDashboard
}