const validation = (value, additionalValue, id) => {
    const label = document.querySelector(`label[for = ${id}]`);

    const {[id]: {textDefault, textAdditional, additionalCondition}} = {
        email: {
            textDefault: 'email',
            textAdditional: 'is invalid',
            additionalCondition: value.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i)
        },
        password: {
            textDefault: 'password',
            textAdditional: 'is too short',
            additionalCondition: value.length >= 6
        },
        confirmPassword: {
            textDefault: 'confirm password',
            textAdditional: 'doen\'t match',
            additionalCondition: value === additionalValue
        }
    };

    if (value === '') {
        label.innerText = `${textDefault} is required`;
        return false;
    }
    
    if(!additionalCondition) {
        label.innerText = `${textDefault} ${textAdditional}`;
        return false;
    }
    
    label.innerText = `${textDefault}`;
    return true;
};

export default validation;