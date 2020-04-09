export const isRequired = value => {
    if (value) return undefined;
    return 'Required field';
};

export const maxLengthCreator = maxLength => {
    return value => {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
        return undefined;
    }
};

export const minLengthCreator = minLength => {
    return value => {
        if (value.length < minLength) return `Min length is ${minLength} symbols`;
        return undefined;
    }
};