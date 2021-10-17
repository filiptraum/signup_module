const genderReducer = (state, action) => {
    if (state === undefined) {
        return {
            value: '',
            selected: {
                male: false,
                female: false,
                unspecified: false
            }
        }
    }

    const {step2Data: {gender}} = state;

    switch (action.type) {
        case 'ON_SWITCH_GENDER':
            const {id, value} = action.payload;
            
            const male = id === 'male';
            const female = id === 'female';
            const unspecified = id === 'unspecified';

            const selected = {...gender.selected, male, female, unspecified};

            return {...gender, value, selected}
    
        default:
            return gender
    }
};

export default genderReducer;