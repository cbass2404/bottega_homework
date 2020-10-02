newVar = "my grammar is terrible with no punctuation nor capitalization"

function capitalizeString(variable) {
    return variable.charAt(0).toUpperCase() + variable.slice(1);
}

console.log(capitalizeString(newVar))