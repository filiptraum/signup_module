import stepReducer from './step-reducer';
import step1DataReducer from './step1-data-reducer';
import dateOfBirthReducer from './step2-data-reducer/date-of-birth-reducer';
import genderReducer from './step2-data-reducer/gender-reducer';
import howHearAboutUsReducer from './step2-data-reducer/how-hear-about-us-reducer';

const reducer = (state, action) => {
    return {
        step: stepReducer(state, action),
        step1Data: step1DataReducer(state, action),
        step2Data: {
            dateOfBirth: dateOfBirthReducer(state, action),
            gender: genderReducer(state, action),
            howHearAboutUs: howHearAboutUsReducer(state, action)
        }
    };
}

export default reducer;