
export const formFieldsValidation = (value) => {
    for (const key in value) {
        if (value[key] === '') return false
    }

    return true;
}