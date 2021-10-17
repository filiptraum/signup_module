const step1DataReducer = (state, action) => {
    if (state === undefined) {
        return [
            {
                id: 'email',
                value: '',
                isValidated: true
            },
            {
                id: 'password',
                value: '',
                isValidated: true
            },
            {
                id: 'confirmPassword',
                value: '',
                isValidated: true
            }
        ]
    }

    const {step1Data} = state;

    switch (action.type) {
        case 'ON_CHANGE_STEP1DATA_VALUE':
            const {id, newValue, status, validation} = action.payload;

            const index = step1Data.findIndex(item => item.id === id);

            if(id === 'password') {
                const passwordConfirmIndex = step1Data.findIndex(item => item.id === 'confirmPassword');
                const {value: passwordConfirmValue} = step1Data[passwordConfirmIndex];

                if (passwordConfirmValue !== '') {
                    const isValidated = validation(passwordConfirmValue, newValue, 'confirmPassword');
                    
                    return [
                        ...step1Data.slice(0, index),
                        {...step1Data[index], value: newValue, isValidated: status},
                        ...step1Data.slice(index + 1, passwordConfirmIndex),
                        {...step1Data[passwordConfirmIndex], isValidated},
                        ...step1Data.slice(passwordConfirmIndex + 1)
                    ]
                }
            }

            return [
                ...step1Data.slice(0, index),
                {...step1Data[index], value: newValue, isValidated: status},
                ...step1Data.slice(index + 1)
            ]
    
        default:
            return step1Data
    }
};

export default step1DataReducer;