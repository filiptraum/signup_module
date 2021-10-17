const  countingPersonAge = ({day, month, year}) => {
    const currentDate = new Date();

    let age = currentDate.getFullYear() - +year;

    if ((+month === currentDate.getMonth() + 1 && +day > currentDate.getDate()) ||
        (+month > currentDate.getMonth() + 1)) {
        age--;    
    }
    
    return age;
};

const validation = (itemsData, values) => {
    const label = document.querySelector('label[for = "date"]');
    label.innerText = 'date of birth';

    const correctedValues = {};
    const errors = {};
    const id = ['day', 'month', 'year'];
    const additionalValue = values.day !== '' && values.month !== '' &&
                            values.year.length === 4 ? countingPersonAge(values) : null;

    for (let i = 0; i < id.length; i++) {
        const key = id[i];

        const {conditions} = itemsData.find(item => item.id === key);
        const {length, max, min} = conditions;

        let value = values[key];

        if (length === 2 && value.length === 1 && value > 0) {
            value = '0' + value;
        }

        if (length === 2 && value.length > 2 && +value[0] === 0) {
            value = value.slice(1);
        }

        correctedValues[key] = value;

        const IsValueCorrect = value.length === length && value <= max && value >= min;

        if (value === '') {
            errors[key] = `${key} is required.`;
            break;
        }else if (!IsValueCorrect) {
            errors[key] = `${key} is invalid. min: ${min}, max: ${max}.`;
            break;
        }else {
            errors[key] = null;
        }
    }

    if (errors['year'] === null && additionalValue !== null && additionalValue < 18) {
        errors['year'] = `you must be older then 18.`;
    }

    const res = {};

    for (let i = 0; i < id.length; i++) {
        const key = id[i];

        if (errors[key] !== null && errors[key] !== undefined) {
            label.innerText = errors[key];
            res[key] = {
                value: correctedValues[key],
                isValidated: false
            };
        }else {
            res[key] = {
                value: correctedValues[key] === undefined ? values[key] : correctedValues[key],
                isValidated: true
            };
        }
    }

    return res;
};

export default validation;