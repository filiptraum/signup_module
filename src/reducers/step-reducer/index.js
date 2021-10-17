const stepReducer = (state, action) => {
    if (state === undefined) {
        return 1
    }

    const {step} = state;

    switch (action.type) {
        case 'ON_NEXT_STEP':
            if (step === 1) {
                for (let i = 0; i < state.step1Data.length; i++) {
                    const {isValidated, value} = state.step1Data[i];
                    
                    if (!isValidated || value === '') return step
                }
            }else {
                const id = ['day', 'month', 'year', 'gender'];

                for (let i = 0; i < id.length; i++) {
                    if (id[i] !== 'gender') {
                        const {isValidated, value} = state.step2Data.dateOfBirth[i];

                        if (!isValidated || value === '') return step
                    }else {
                        const {value} = state.step2Data.gender;

                        if (value === 'unspecified' || value === '') {
                            document.querySelector('#unspecified').focus();
                            
                            return step
                        }
                    }
                }
            }

            return step + 1

        case 'ON_PREVIOUS_STEP':
            return step - 1

        case 'GO_TO_DASHBOARD':
            const {step1Data, step2Data: {dateOfBirth, gender, howHearAboutUs}} = state; 

            const email = step1Data.find(({id}) => id === 'email').value;
            const password = step1Data.find(({id}) => id === 'password').value;

            const dayValue = dateOfBirth.find(({id}) => id === 'day').value;
            const monthValue = dateOfBirth.find(({id}) => id === 'month').value;
            const yearValue = dateOfBirth.find(({id}) => id === 'year').value;

            const date_of_birth = Date.parse(`${yearValue}-${monthValue}-${dayValue}`);
            
            const res = {
                user_data: {
                    email,
                    password,
                    date_of_birth,
                    gender: gender.value,
                    how_hear_about_us: howHearAboutUs.value
                }
            }

            console.log(JSON.stringify(res));
            
            return step
    
        default:
            return step
    }
};

export default stepReducer;