const howHearAboutUsReducer = (state, action) => {
    if (state === undefined) {
        return {
            value: null,
            isSelected: false
        }
    }

    const {step2Data: {howHearAboutUs}} = state;

    switch (action.type) {
        case 'ON_CHANGE_HOW_HEAR_ABOUT_US_VALUE':
            const value = action.payload;

            return {...howHearAboutUs, value, isSelected: value !== ''}
    
        default:
            return howHearAboutUs
    }
};

export default howHearAboutUsReducer;