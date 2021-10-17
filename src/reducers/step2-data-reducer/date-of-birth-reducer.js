const dateOfBirthReducer = (state, action) => {
    if (state === undefined) {
        return [
            {
                id: 'day',
                value: '',
                isValidated: true
            },
            {
                id: 'month',
                value: '',
                isValidated: true
            },
            {
                id: 'year',
                value: '',
                isValidated: true
            }
        ]
    }

    const {step2Data: {dateOfBirth}} = state;

    switch (action.type) {
        case 'ON_CHANGE_DATE_OF_BIRTH_VALUE':
            const validationResult = action.payload;

            const day = {
                ...dateOfBirth[0],
                value: validationResult['day'].value,
                isValidated: validationResult['day'].isValidated
            };
            const month = {
                ...dateOfBirth[1],
                value: validationResult['month'].value,
                isValidated: validationResult['month'].isValidated
            };
            const year = {
                ...dateOfBirth[2],
                value: validationResult['year'].value,
                isValidated: validationResult['year'].isValidated
            };

            return [day, month, year]
    
        default:
            return dateOfBirth
    }
};

export default dateOfBirthReducer;