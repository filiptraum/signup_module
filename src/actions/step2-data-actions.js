const onChangeDateOfBirthValue = validationResult => {
    return {
        type: 'ON_CHANGE_DATE_OF_BIRTH_VALUE',
        payload: validationResult
    }
};

const onSwitchGender = (id, value) => {
    return {
        type: 'ON_SWITCH_GENDER',
        payload: {id, value}
    }
};

const onChangeHowHearAboutUsValue = value => {
    return {
        type: 'ON_CHANGE_HOW_HEAR_ABOUT_US_VALUE',
        payload: value
    }
};

export {
    onChangeDateOfBirthValue,
    onSwitchGender,
    onChangeHowHearAboutUsValue,
}