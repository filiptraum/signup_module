const onChangeStep1DataValue = (id, newValue, status, validation) => {
    return {
        type: 'ON_CHANGE_STEP1DATA_VALUE',
        payload: {id, newValue, status, validation}
    }
};

export {
    onChangeStep1DataValue
}